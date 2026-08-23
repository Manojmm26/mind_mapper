/* Standalone performance probe (not a test). Run: npx tsx scripts/perf-probe.ts <baseURL> */
import { chromium } from "@playwright/test";

const BASE = process.argv[2] || "http://localhost:4173";

interface RunMetrics {
  ttfbMs: number;
  fcpMs: number;
  lcpMs: number;
  domContentLoadedMs: number;
  loadEventMs: number;
  longTasksCount: number;
  longTasksTotalMs: number;
  domNodes: number;
  jsHeapMB: number | null;
  transferredMB: number;
  requests: number;
}

async function collect(page: import("@playwright/test").Page): Promise<RunMetrics> {
  return await page.evaluate(
    () =>
      new Promise<RunMetrics>((resolve) => {
        const nav = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming;
        const paints = performance.getEntriesByType("paint");
        const fcp = paints.find((p) => p.name === "first-contentful-paint")?.startTime ?? -1;

        let lcp = -1;
        try {
          const po = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            if (entries.length) lcp = entries[entries.length - 1].startTime;
          });
          po.observe({ type: "largest-contentful-paint", buffered: true } as any);
          setTimeout(() => po.disconnect(), 100);
        } catch {}

        let longTasksCount = 0;
        let longTasksTotalMs = 0;
        try {
          const entries = (performance as any).getEntriesByType("longtask") || [];
          longTasksCount = entries.length;
          longTasksTotalMs = entries.reduce((a: number, e: any) => a + e.duration, 0);
        } catch {}

        const resources = performance.getEntriesByType("resource") as PerformanceResourceTiming[];

        setTimeout(() => {
          resolve({
            ttfbMs: Math.round(nav.responseStart),
            fcpMs: Math.round(fcp),
            lcpMs: Math.round(lcp),
            domContentLoadedMs: Math.round(nav.domContentLoadedEventEnd),
            loadEventMs: Math.round(nav.loadEventEnd),
            longTasksCount,
            longTasksTotalMs: Math.round(longTasksTotalMs),
            domNodes: document.getElementsByTagName("*").length,
            jsHeapMB:
              (performance as any).memory
                ? Math.round((performance as any).memory.usedJSHeapSize / 1048576)
                : null,
            transferredMB:
              Math.round(
                resources.reduce((a, r) => a + (r.transferSize || 0), 0) + (nav.transferSize || 0)
              ) / 1048576,
            requests: resources.length + 1,
          });
        }, 300);
      })
  );
}

async function main() {
  const browser = await chromium.launch();

  // --- Cold loads x3 ---
  const runs: RunMetrics[] = [];
  for (let i = 0; i < 3; i++) {
    const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
    const page = await ctx.newPage();
    const start = Date.now();
    await page.goto(BASE, { waitUntil: "load" });
    await page.waitForSelector("#root > *");
    await page.waitForTimeout(1500);
    const m = await collect(page);
    console.log(`cold-load #${i + 1} (${Date.now() - start}ms wall):`, JSON.stringify(m));
    runs.push(m);
    await ctx.close();
  }

  const avg = (k: keyof RunMetrics) =>
    Math.round(runs.reduce((a, r) => a + (r[k] as number), 0) / runs.length);
  console.log("\nAVG cold load:", JSON.stringify({
    ttfbMs: avg("ttfbMs"), fcpMs: avg("fcpMs"), lcpMs: avg("lcpMs"),
    domContentLoadedMs: avg("domContentLoadedMs"), loadEventMs: avg("loadEventMs"),
    domNodes: avg("domNodes"), transferredMB: avg("transferredMB"), requests: avg("requests"),
  }));

  // --- Flow: Browse Showcase -> open first card (mega-map render) ---
  {
    const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
    const page = await ctx.newPage();
    await page.goto(BASE, { waitUntil: "load" });
    await page.waitForTimeout(800);

    const flowStart = Date.now();
    await page.locator('button', { hasText: 'Browse Showcase' }).first().click();
    await page.waitForTimeout(1200);
    const galleryShownMs = Date.now() - flowStart;

    const domAfterGallery = await page.evaluate(() => document.getElementsByTagName("*").length);

    const mapStart = Date.now();
    await page.locator('div.group.relative', { hasText: 'Mind Map' }).first().click();
    await page.waitForTimeout(2500);
    const mapRenderedMs = Date.now() - mapStart;

    const m = await collect(page);
    console.log(`\nflow showcase->gallery: ${galleryShownMs}ms, gallery DOM nodes: ${domAfterGallery}`);
    console.log(`flow open-first-example: ${mapRenderedMs}ms`);
    console.log(`after-flow metrics:`, JSON.stringify({
      domNodes: m.domNodes, jsHeapMB: m.jsHeapMB,
      longTasksCount: m.longTasksCount, longTasksTotalMs: m.longTasksTotalMs,
      transferredMB: Math.round(m.transferredMB * 10) / 10,
    }));
    await ctx.close();
  }

  await browser.close();
}

main().catch((e) => { console.error(e); process.exit(1); });
