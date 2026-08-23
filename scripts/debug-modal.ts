import { chromium } from "@playwright/test";

async function main() {
  const browser = await chromium.launch();
  const page = await (await browser.newContext()).newPage();
  await page.goto("http://localhost:3000", { waitUntil: "load" });
  await page.waitForSelector("#root > *");
  await page.waitForTimeout(1200);
  await page.locator("button", { hasText: /Interview Studio/i }).first().click();
  await page.waitForSelector("text=Rosetta Stone", { timeout: 60000 });
  // select custom stack
  await page.locator("#tech-stack-switcher-btn").click();
  const custom = page.locator("[data-stack-id^='custom-']").first();
  if (!(await custom.count())) { console.log("NO CUSTOM STACK"); return; }
  await custom.click();
  await page.waitForTimeout(800);
  await page.locator("button", { hasText: "Deep Dive Dossier" }).first().click();
  await page.waitForTimeout(800);
  console.log("tabs visible:");
  const tabs = await page.locator('button:has-text("Architecture Dossier")').allTextContents();
  console.log(JSON.stringify(tabs));
  await page.locator('button:has-text("Architecture Dossier")').first().click();
  await page.waitForTimeout(800);
  const found = await page.evaluate(() => {
    const t = document.body.innerText;
    return {
      bestPractices: (t.match(/Best Practices/gi) || []).length,
      probes: (t.match(/Interview Probes/gi) || []).length,
      pitfalls: (t.match(/Pitfalls/gi) || []).length,
      underTheHood: (t.match(/Under The Hood|Under-the-Hood/gi) || []).length,
      totalLen: t.length,
      conceptTitleHit: (t.match(/Deep Dive/gi) || []).length,
    };
  });
  console.log(JSON.stringify(found));
  await browser.close();
}
main();
