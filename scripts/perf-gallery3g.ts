/* Gallery load under Fast 3G + 4x CPU: npx tsx scripts/perf-gallery3g.ts <baseURL> */
import { chromium } from "@playwright/test";

const BASE = process.argv[2] || "http://localhost:4173";

async function main() {
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await ctx.newPage();
  const cdp = await ctx.newCDPSession(page);
  await cdp.send("Emulation.setCPUThrottlingRate", { rate: 4 });
  await cdp.send("Network.enable");
  await cdp.send("Network.emulateNetworkConditions", {
    offline: false,
    latency: 150,
    downloadThroughput: (1.6 * 1024 * 1024) / 8,
    uploadThroughput: (750 * 1024) / 8,
  });

  await page.goto(BASE, { waitUntil: "load", timeout: 120000 });

  const bytesAtStart = await page.evaluate(() =>
    (performance.getEntriesByType("resource") as PerformanceResourceTiming[]).reduce(
      (a, r) => a + (r.transferSize || 0), 0)
  );

  const t0 = Date.now();
  await page.locator('button', { hasText: 'Browse Showcase' }).first().click();
  await page.locator('div.group.relative.flex.flex-col').first().waitFor({ timeout: 180000 });
  const galleryReadyMs = Date.now() - t0;

  // let resource entries settle
  await page.waitForTimeout(300);
  const bytesAtEnd = await page.evaluate(() =>
    (performance.getEntriesByType("resource") as PerformanceResourceTiming[]).reduce(
      (a, r) => a + (r.transferSize || 0), 0)
  );

  console.log(JSON.stringify({
    galleryReadyMs,
    transferredDuringOpenMB: Math.round(((bytesAtEnd - bytesAtStart) / 1048576) * 100) / 100,
  }));

  await browser.close();
}

main().catch((e) => { console.error(e); process.exit(1); });
