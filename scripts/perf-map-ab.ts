/* A/B probe for mega-map open: first paint vs settled + long-task max.
   Usage: npx tsx scripts/perf-map-ab.ts <baseURL> [runs] */
import { chromium } from "@playwright/test";

const BASE = process.argv[2] || "http://localhost:4173";
const RUNS = Number(process.argv[3] || 3);

interface RunResult {
  firstPaintMs: number;
  settleMs: number;
  finalNodes: number;
  longTaskCount: number;
  longTaskTotalMs: number;
  longTaskMaxMs: number;
}

async function runOnce(browser: any): Promise<RunResult> {
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await ctx.newPage();
  const cdp = await ctx.newCDPSession(page);
  await cdp.send("Emulation.setCPUThrottlingRate", { rate: 4 });

  await page.goto(BASE, { waitUntil: "load" });
  await page.waitForTimeout(500);
  await page.locator('button', { hasText: 'Browse Showcase' }).first().click();
  await page.locator('div.group.relative.flex.flex-col').first().waitFor({ timeout: 60000 });

  // Start observing long tasks right before the click.
  await page.evaluate(() => {
    (window as any).__lt = [];
    const po = new PerformanceObserver((l) =>
      (window as any).__lt.push(...l.getEntries().map((e: any) => e.duration))
    );
    po.observe({ type: "longtask", buffered: false } as any);
  });

  const t0 = Date.now();
  await page.locator('div.group.relative', { hasText: 'Mind Map' }).first().click();

  let firstPaintMs = -1;
  let lastCount = 0;
  let stablePolls = 0;
  const t0Page = await page.evaluate(() => performance.now());

  while (Date.now() - t0 < 90000) {
    await page.waitForTimeout(120);
    const count = await page.evaluate(() => document.querySelectorAll(".react-flow__node").length);
    if (count > 0 && firstPaintMs === -1) firstPaintMs = Date.now() - t0;
    if (count > 0 && count === lastCount) {
      stablePolls++;
      if (stablePolls >= 5) break; // unchanged for ~600ms -> settled
    } else {
      stablePolls = 0;
    }
    lastCount = count;
  }
  const settleMs = Date.now() - t0;

  await page.waitForTimeout(400);
  const lt = (await page.evaluate(() => (window as any).__lt as number[])) || [];

  await ctx.close();
  return {
    firstPaintMs,
    settleMs,
    finalNodes: lastCount,
    longTaskCount: lt.length,
    longTaskTotalMs: Math.round(lt.reduce((a, b) => a + b, 0)),
    longTaskMaxMs: Math.round(Math.max(0, ...lt)),
  };
}

async function main() {
  const browser = await chromium.launch();
  const results: RunResult[] = [];
  for (let i = 0; i < RUNS; i++) {
    const r = await runOnce(browser);
    results.push(r);
    console.log(`run ${i + 1}:`, JSON.stringify(r));
  }

  const median = (arr: number[]) => arr.sort((a, b) => a - b)[Math.floor(arr.length / 2)];
  console.log("\nMEDIAN:", JSON.stringify({
    firstPaintMs: median(results.map((r) => r.firstPaintMs)),
    settleMs: median(results.map((r) => r.settleMs)),
    longTaskMaxMs: median(results.map((r) => r.longTaskMaxMs)),
    longTaskTotalMs: median(results.map((r) => r.longTaskTotalMs)),
    finalNodes: median(results.map((r) => r.finalNodes)),
  }));
  await browser.close();
}

main().catch((e) => { console.error(e); process.exit(1); });
