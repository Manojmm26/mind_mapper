import { test } from "@playwright/test";
import path from "path";

const ARTIFACT_DIR = "/home/merisumaniya/.gemini/antigravity-cli/brain/51c96e9f-f770-4617-8921-e3c70bee4abd";

test("Capture Knowledge Base Wiki Explorer in Dark Mode", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });

  console.log("Navigating to http://localhost:3000...");
  await page.goto("http://localhost:3000");
  await page.waitForSelector("#root > *");

  // Click dark mode on FAB
  console.log("Clicking FAB Theme button...");
  const fabBtn = page.locator('button[aria-label="Toggle Theme Options"]').first();
  await fabBtn.click();
  await page.waitForTimeout(400);

  console.log("Selecting Dark Mode...");
  const darkOpt = page.locator('button[aria-label="Dark Mode"]').first();
  await darkOpt.click();
  await page.waitForTimeout(600);

  // Open Knowledge Base Modal
  console.log("Opening Knowledge Base...");
  const wikiBtn = page.locator('button', { hasText: 'Knowledge Base' }).first();
  await wikiBtn.click();
  await page.waitForTimeout(800);

  // Capture Browse Tab in Dark Mode
  const browsePath = path.join(ARTIFACT_DIR, "dark_wiki_01_browse.png");
  await page.screenshot({ path: browsePath, fullPage: false });
  console.log("Saved:", browsePath);

  // Click Ask Tab
  console.log("Clicking Ask Tab...");
  await page.click('button:has-text("Ask")');
  await page.waitForTimeout(500);
  const askPath = path.join(ARTIFACT_DIR, "dark_wiki_02_ask.png");
  await page.screenshot({ path: askPath, fullPage: false });
  console.log("Saved:", askPath);

  // Click Statistics Tab
  console.log("Clicking Statistics Tab...");
  await page.click('button:has-text("Statistics")');
  await page.waitForTimeout(500);
  const statsPath = path.join(ARTIFACT_DIR, "dark_wiki_03_stats.png");
  await page.screenshot({ path: statsPath, fullPage: false });
  console.log("Saved:", statsPath);
});
