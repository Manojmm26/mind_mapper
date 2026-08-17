import { test } from "@playwright/test";
import path from "path";

const ARTIFACT_DIR = "/home/merisumaniya/.gemini/antigravity-cli/brain/51c96e9f-f770-4617-8921-e3c70bee4abd";

test("Capture Showcase Example Workspace in Light and Dark Mode", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });

  console.log("Navigating to http://localhost:3000...");
  await page.goto("http://localhost:3000");
  await page.waitForSelector("#root > *");
  await page.waitForTimeout(1000);

  // Open Browse Showcase (Gallery Page)
  console.log("Clicking Browse Showcase...");
  const browseBtn = page.locator('button', { hasText: 'Browse Showcase' }).first();
  await browseBtn.click();
  await page.waitForTimeout(1000);

  // Click the first showcase item card
  console.log("Clicking first example card...");
  const firstCard = page.locator('div.group.relative', { hasText: 'Mind Map' }).first();
  await firstCard.click();
  await page.waitForTimeout(1500);

  // Capture Workspace View in Light Mode
  const lightExamplePath = path.join(ARTIFACT_DIR, "example_01_light_workspace.png");
  await page.screenshot({ path: lightExamplePath, fullPage: false });
  console.log("Saved:", lightExamplePath);

  // Toggle Dark Mode via FAB
  console.log("Clicking FAB Theme button...");
  const fabBtn = page.locator('button[aria-label="Toggle Theme Options"]').first();
  await fabBtn.click();
  await page.waitForTimeout(400);

  console.log("Selecting Dark Mode...");
  const darkModeButton = page.locator('button[aria-label="Dark Mode"]').first();
  await darkModeButton.click();
  await page.waitForTimeout(1000);

  // Capture Workspace View in Dark Mode
  const darkExamplePath = path.join(ARTIFACT_DIR, "example_02_dark_workspace.png");
  await page.screenshot({ path: darkExamplePath, fullPage: false });
  console.log("Saved:", darkExamplePath);
});
