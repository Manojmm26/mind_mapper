/* Throttled perf probe: npx tsx scripts/perf-throttle.ts <baseURL> */
import { chromium } from "@playwright/test";

const BASE = process.argv[2] || "http://localhost:4173";

async function withThrottledPage(browser: any, cpuRate: number) {
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await ctx.newPage();
  const cdp = await ctx.newCDPSession(page);
  await cdp.send("Emulation.setCPUThrottlingRate", { rate: cpuRate });
  await cdp.send("Network.enable");
  await cdp.send("Network.emulateNetworkConditions", {
    offline: false,
    latency: 150,
    downloadThroughput: (1.6 * 1024 * 1024) / 8,
    uploadThroughput: (750 * 1024) / 8,
  });
  return { ctx, page };
}

async function vitalStats(page: any) {
  return page.evaluate(
    () =>
      new Promise<any>((resolve) => {
        let lcp = -1;
        try {
          const po = new PerformanceObserver((l) => {
            const e = l.getEntries();
            if (e.length) lcp = e[e.length - 1].startTime;
          });
          po.observe({ type: "largest-contentful-paint", buffered: true } as any);
          setTimeout(() => po.disconnect(), 100);
        } catch {}
        const nav = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming;
        const fcp =
          performance.getEntriesByType("paint").find((p) => p.name === "first-contentful-paint")
            ?.startTime ?? -1;
        setTimeout(() => {
          resolve({
            fcpMs: Math.round(fcp),
            lcpMs: Math.round(lcp),
            ttiProxyMs: Math.round(nav.domContentLoadedEventEnd),
            domNodes: document.getElementsByTagName("*").length,
            heapMB: (performance as any).memory
              ? Math.round((performance as any).memory.usedJSHeapSize / 1048576)
              : null,
          });
        }, 250);
      })
  );
}

async function main() {
  const browser = await chromium.launch();

  console.log(`=== Cold load @ 4x CPU + Fast 3G ===`);
  {
    const { ctx, page } = await withThrottledPage(browser, 4);
    const t0 = Date.now();
    await page.goto(BASE, { waitUntil: "load", timeout: 120000 });
    await page.waitForSelector("#root > *");
    const interactiveWall = Date.now() - t0;
    const stats = await vitalStats(page);
    console.log(`wall-to-content: ${interactiveWall}ms`, JSON.stringify(stats));
    await ctx.close();
  }

  console.log(`\n=== Flow: open showcase -> first example @ 4x CPU, no net cap (assets cached per-context? fresh ctx => refetch) ===`);
  {
    // Fresh context but no network throttle so we isolate CPU/render cost of the mega-map
    const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
    const page = await ctx.newPage();
    const cdp = await ctx.newCDPSession(page);
    await cdp.send("Emulation.setCPUThrottlingRate", { rate: 4 });
    await page.goto(BASE, { waitUntil: "load" });
    await page.waitForTimeout(500);

    let longTasks = 0;
    let longTaskMs = 0;
    page.on("console", () => {});
    await page.evaluate(() => {
      (window as any).__lt = [];
      const po = new PerformanceObserver((l) =>
        (window as any).__lt.push(...l.getEntries().map((e: any) => e.duration))
      );
      po.observe({ type: "longtask", buffered: false } as any);
      (window as any).__po = po;
    });

    const g0 = Date.now();
    await page.locator('button', { hasText: 'Browse Showcase' }).first().click();
    await page.locator('div.group.relative').first().waitFor({ timeout: 60000 });
    const galleryReadyMs = Date.now() - g0;

    const m0 = Date.now();
    await page.locator('div.group.relative', { hasText: 'Mind Map' }).first().click();
    // wait for the workspace canvas to paint
    await page.waitForFunction(
      () => document.querySelectorAll(".react-flow__node").length > 0,
      { timeout: 90000 }
    );
    const firstNodePaintMs = Date.now() - m0;
    await page.waitForTimeout(1000);

    const lt = await page.evaluate(() => (window as any).__lt as number[]);
    longTasks = lt.length;
    longTaskMs = Math.round(lt.reduce((a, b) => a + b, 0));

    const stats = await vitalStats(page);
    const nodeCount = await page.evaluate(() => document.querySelectorAll(".react-flow__node").length);
    console.log(`gallery-ready: ${galleryReadyMs}ms | click->first-map-node: ${firstNodePaintMs}ms`);
    console.log(`long tasks (>50ms): ${longTasks}, total ${longTaskMs}ms | react-flow nodes rendered: ${nodeCount}`);
    console.log(`post-flow:`, JSON.stringify(stats));
    await ctx.close();
  }

  await browser.close();
}

main().catch((e) => { console.error(e); process.exit(1); });
