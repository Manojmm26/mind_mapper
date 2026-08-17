import { test } from "@playwright/test";
import path from "path";

const ARTIFACT_DIR = "/home/merisumaniya/.gemini/antigravity-cli/brain/51c96e9f-f770-4617-8921-e3c70bee4abd";

test("Capture Light Mode and Dark Mode Screenshots", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });

  console.log("Navigating to http://localhost:3000...");
  await page.goto("http://localhost:3000");
  await page.waitForSelector("#root > *");
  await page.waitForTimeout(1000);

  // 1. Capture Light Mode Home Page
  const lightHomePath = path.join(ARTIFACT_DIR, "dark_theme_01_light_home.png");
  await page.screenshot({ path: lightHomePath, fullPage: false });
  console.log("Saved:", lightHomePath);

  // 2. Switch to Dark Mode via FAB Speed Dial
  console.log("Clicking FAB Theme button...");
  const fabBtn = page.locator('button[aria-label="Toggle Theme Options"]').first();
  await fabBtn.click();
  await page.waitForTimeout(400);

  console.log("Selecting Dark Mode...");
  const darkModeButton = page.locator('button[aria-label="Dark Mode"]').first();
  await darkModeButton.click();
  await page.waitForTimeout(1000);

  // 3. Capture Dark Mode Home Page
  const darkHomePath = path.join(ARTIFACT_DIR, "dark_theme_02_dark_home.png");
  await page.screenshot({ path: darkHomePath, fullPage: false });
  console.log("Saved:", darkHomePath);

  // 4. Open Pretext Showcase in Dark Mode
  console.log("Opening Pretext Showcase...");
  const showcaseBtn = page.locator('button', { hasText: 'Open showcase' }).first();
  await showcaseBtn.click();
  await page.waitForTimeout(1500);

  // 5. Capture Dark Mode Canvas Showcase
  const darkShowcasePath = path.join(ARTIFACT_DIR, "dark_theme_03_dark_showcase.png");
  await page.screenshot({ path: darkShowcasePath, fullPage: false });
  console.log("Saved:", darkShowcasePath);
});
