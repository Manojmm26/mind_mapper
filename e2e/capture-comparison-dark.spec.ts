import { test } from "@playwright/test";
import path from "path";

const ARTIFACT_DIR = "/home/merisumaniya/.gemini/antigravity-cli/brain/51c96e9f-f770-4617-8921-e3c70bee4abd";

test("Capture Comparison Workspace in Dark Mode", async ({ page }) => {
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

  // Click Browse Showcase button
  console.log("Opening Showcase Gallery...");
  const showcaseBtn = page.locator('button', { hasText: 'Browse Showcase' }).first();
  await showcaseBtn.click();
  await page.waitForTimeout(1000);

  // Click Comparisons category tab
  console.log("Clicking Comparisons tab...");
  const compTab = page.locator('button', { hasText: /^Comparisons$/ }).first();
  await compTab.click();
  await page.waitForTimeout(600);

  // Click Explore CTA on first Decision Matrix card
  console.log("Clicking Explore CTA on first Decision Matrix card...");
  const exploreCta = page.locator('span', { hasText: 'Explore' }).first();
  await exploreCta.click();

  // Wait for Workspace to load Matrix button
  console.log("Waiting for Matrix button...");
  const matrixBtn = page.locator('button', { hasText: 'Matrix' }).first();
  await matrixBtn.waitFor({ state: 'visible', timeout: 15000 });
  await page.waitForTimeout(500);

  // Capture Comparison Workspace Cards View
  const comparePath = path.join(ARTIFACT_DIR, "dark_comparison_01_cards.png");
  await page.screenshot({ path: comparePath, fullPage: false });
  console.log("Saved:", comparePath);

  // Switch to Matrix view
  console.log("Switching to Matrix view...");
  await matrixBtn.click();
  await page.waitForTimeout(800);

  const matrixPath = path.join(ARTIFACT_DIR, "dark_comparison_02_matrix.png");
  await page.screenshot({ path: matrixPath, fullPage: false });
  console.log("Saved:", matrixPath);
});
