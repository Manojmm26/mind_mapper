import { test } from "@playwright/test";
import path from "path";

const ARTIFACT_DIR = "/home/merisumaniya/.gemini/antigravity-cli/brain/51c96e9f-f770-4617-8921-e3c70bee4abd";

test("Capture Bottom Right Floating Action Theme Toggle", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });

  console.log("Navigating to http://localhost:3000...");
  await page.goto("http://localhost:3000");
  await page.waitForSelector("#root > *");
  await page.waitForTimeout(1000);

  // Capture Home Page with FAB collapsed
  const collapsedPath = path.join(ARTIFACT_DIR, "fab_01_collapsed.png");
  await page.screenshot({ path: collapsedPath, fullPage: false });
  console.log("Saved:", collapsedPath);

  // Click the floating circular theme button in bottom-right
  console.log("Clicking FAB Theme button...");
  const fabBtn = page.locator('button[aria-label="Toggle Theme Options"]').first();
  await fabBtn.click();
  await page.waitForTimeout(600);

  // Capture FAB expanded speed-dial menu
  const expandedPath = path.join(ARTIFACT_DIR, "fab_02_expanded.png");
  await page.screenshot({ path: expandedPath, fullPage: false });
  console.log("Saved:", expandedPath);

  // Click Dark Mode option
  console.log("Clicking Dark Mode option...");
  const darkOpt = page.locator('button[aria-label="Dark Mode"]').first();
  await darkOpt.click();
  await page.waitForTimeout(1000);

  // Capture Home Page in Dark Mode
  const darkModePath = path.join(ARTIFACT_DIR, "fab_03_dark_mode.png");
  await page.screenshot({ path: darkModePath, fullPage: false });
  console.log("Saved:", darkModePath);
});
