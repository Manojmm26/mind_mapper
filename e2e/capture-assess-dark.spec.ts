import { test } from "@playwright/test";
import path from "path";

const ARTIFACT_DIR = "/home/merisumaniya/.gemini/antigravity-cli/brain/51c96e9f-f770-4617-8921-e3c70bee4abd";

test("Capture Assessment Workflow in Dark Mode", async ({ page }) => {
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

  // Click Browse Showcase
  console.log("Opening Showcase Gallery...");
  const showcaseBtn = page.locator('button', { hasText: 'Browse Showcase' }).first();
  await showcaseBtn.click();
  await page.waitForTimeout(800);

  // Click first Mind Map showcase item to open workspace
  console.log("Selecting first Mind Map...");
  const firstMapCard = page.locator('div.group.relative', { hasText: 'Mind Map' }).first();
  await firstMapCard.click();
  await page.waitForTimeout(1200);

  // Click Assess mode tab in workspace top header
  console.log("Clicking Assess Mode tab in Workspace...");
  const assessTab = page.locator('button', { hasText: 'Assess' }).first();
  if (await assessTab.isVisible()) {
    await assessTab.click();
    await page.waitForTimeout(800);
  }

  // Capture Phase 1 Self-Report Wizard in Dark Mode
  const phase1Path = path.join(ARTIFACT_DIR, "dark_assess_01_phase1.png");
  await page.screenshot({ path: phase1Path, fullPage: false });
  console.log("Saved:", phase1Path);
});
