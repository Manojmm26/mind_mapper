/* E2E: generate a custom AI tech stack and inspect the dossier.
   npx tsx scripts/test-stack-gen.ts */
import { chromium } from "@playwright/test";

const BASE = process.argv[2] || "http://localhost:3000";

async function main() {
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await ctx.newPage();
  const errors: string[] = [];
  page.on("pageerror", (e) => errors.push(`pageerror: ${e.message}`));
  page.on("console", (m) => {
    if (m.type() === "error") errors.push(m.text());
  });

  await page.goto(BASE, { waitUntil: "load", timeout: 60000 });
  await page.waitForSelector("#root > *");
  await page.waitForTimeout(1500);

  // Enter interview studio
  const enterBtn = page.locator("button", { hasText: /Interview Studio/i }).first();
  if (await enterBtn.count()) {
    await enterBtn.click();
  } else {
    // fallback: any element mentioning the studio heading
    await page.locator('text=Master Full-Stack Interview Studio').first().click();
  }
  console.log("[1] entered studio, waiting for lazy chunk...");
  await page.waitForSelector('text=Rosetta Stone', { timeout: 60000 });

  // Open custom stack modal (via switcher dropdown)
  await page.locator("#tech-stack-switcher-btn").click();
  await page.waitForTimeout(500);
  await page.locator("button", { hasText: "+ Custom AI Matrix" }).first().click();
  await page.waitForSelector('text=Generate Custom Tech Matrix', { timeout: 30000 });
  console.log("[2] modal open");

  // Choose distinctive stack so output is clearly AI-generated
  await page.locator('button[type="button"]', { hasText: "SvelteKit 2" }).first().click();
  await page.locator('button[type="button"]', { hasText: "Rust (Axum & Tokio)" }).first().click();
  await page.locator('button[type="button"]', { hasText: "MongoDB" }).first().click();

  const t0 = Date.now();
  await page.locator("button", { hasText: "Generate Matrix with AI" }).first().click();
  console.log("[3] generation started...");

  // Watch progress until success/error/fallback
  let finalStatus = "";
  while (Date.now() - t0 < 420000) {
    await page.waitForTimeout(5000);
    const status = await page
      .locator('[role="status"]')
      .first()
      .textContent()
      .catch(() => "");
    if (status && status !== finalStatus) {
      console.log(`    [${Math.round((Date.now() - t0) / 1000)}s] ${status?.trim()}`);
      finalStatus = status || "";
    }
    const done =
      status &&
      (status.includes("Generated") || status.includes("starter template") || status.includes("unavailable"));
    if (done) break;
    // Modal may have closed on success
    if (!(await page.locator('text=Generate Custom Tech Matrix').count())) break;
  }
  const elapsed = Math.round((Date.now() - t0) / 1000);
  console.log(`[4] finished in ~${elapsed}s. Final status: ${finalStatus.trim()}`);

  // If modal still open with fallback notice, close it via the switcher state
  if (await page.locator('text=Generate Custom Tech Matrix').count()) {
    await page.locator('button', { hasText: 'Cancel' }).first().click().catch(() => {});
  }

  // The generated stack should now be active — read tab labels for counts
  await page.waitForTimeout(1500);
  const tabs = await page.locator('[role="tablist"] button').allTextContents();
  console.log("[5] studio tabs:", JSON.stringify(tabs));

  // Rosetta paradigms: count accordion items
  const rosettaItems = await page.locator('button:has-text("↔")').count().catch(() => 0);

  // Grab a sample of generated content from the Rosetta view
  const bodySample = await page.evaluate(() => document.body.innerText.slice(0, 3000));
  console.log("[6] rosetta quick count (buttons containing ↔):", rosettaItems);
  console.log("[7] page text sample:\n", bodySample.split("\n").filter(Boolean).slice(0, 40).join("\n"));

  // Switch to teleprompter tab and count scenarios
  await page.locator('[role="tablist"] button', { hasText: "Teleprompter" }).first().click();
  await page.waitForTimeout(800);
  const scenarioCards = await page.locator('button:has-text("War Stories"), div[class*="rounded-2xl"]').count();
  console.log("[8] teleprompter rough card count:", scenarioCards);

  // SQL deck
  await page.locator('[role="tablist"] button', { hasText: "Tuning" }).first().click();
  await page.waitForTimeout(800);
  const sqlText = await page.evaluate(() => document.body.innerText.slice(0, 2000));
  console.log("[9] sql deck sample:\n", sqlText.split("\n").filter(Boolean).slice(0, 25).join("\n"));

  if (errors.length) {
    console.log("\n[!] console/page errors during run:");
    errors.slice(0, 10).forEach((e) => console.log("   ", e.slice(0, 200)));
  } else {
    console.log("\n[ok] no console errors");
  }

  await page.screenshot({ path: "/tmp/opencode/stack-gen-result.png", fullPage: false });
  await browser.close();
}

main().catch((e) => { console.error(e); process.exit(1); });
