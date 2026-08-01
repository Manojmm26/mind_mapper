import { test, expect } from "@playwright/test";
import path from "path";

const ARTIFACT_DIR = "/home/merisumaniya/.gemini/antigravity-cli/brain/51c96e9f-f770-4617-8921-e3c70bee4abd";

test.use({ viewport: { width: 1440, height: 900 } });

test("Verify AI Mind Mapper UI - Learn, Compare, Assess Modes", async ({ page }) => {
  await page.goto("http://localhost:3000/", { waitUntil: "networkidle" });

  // 1. Home Page Verification
  const heading = page.locator("h1");
  await expect(heading).toContainText("AI Mind Mapper");

  const learnBtn = page.locator("button:has-text('Learn')").first();
  const compareBtn = page.locator("button:has-text('Compare')").first();
  const assessBtn = page.locator("button:has-text('Assess')").first();

  await expect(learnBtn).toBeVisible();
  await expect(compareBtn).toBeVisible();
  await expect(assessBtn).toBeVisible();

  await page.screenshot({ path: path.join(ARTIFACT_DIR, "01_home_page.png"), fullPage: true });

  // 2. Assess Mode Selection
  await assessBtn.click();
  const input = page.locator("input[type='text']");
  await expect(input).toHaveAttribute("placeholder", "Test how much you know about any topic...");

  await page.screenshot({ path: path.join(ARTIFACT_DIR, "02_assess_mode.png"), fullPage: true });

  // 3. Compare Mode Selection
  await compareBtn.click();
  await expect(input).toHaveAttribute("placeholder", "Compare any product, tool, or topic...");

  await page.screenshot({ path: path.join(ARTIFACT_DIR, "03_compare_mode.png"), fullPage: true });

  // 4. Learn Mode Selection
  await learnBtn.click();
  await expect(input).toHaveAttribute("placeholder", "Visualize any concept...");

  await page.screenshot({ path: path.join(ARTIFACT_DIR, "04_learn_mode.png"), fullPage: true });

  // 5. Test Gallery Navigation
  const browseShowcaseBtn = page.locator("button:has-text('Browse Showcase')").first();
  if (await browseShowcaseBtn.isVisible()) {
    await browseShowcaseBtn.click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: path.join(ARTIFACT_DIR, "05_showcase_gallery.png"), fullPage: true });

    // Click on an example map to load workspace
    const exampleMap = page.locator("h3").first();
    if (await exampleMap.isVisible()) {
      await exampleMap.click();
      await page.waitForTimeout(500);

      // Verify Test My Knowledge button exists in Learn mode when map is loaded!
      const testKnowledgeBtn = page.locator("button:has-text('Test My Knowledge')").first();
      await expect(testKnowledgeBtn).toBeVisible();

      await page.screenshot({ path: path.join(ARTIFACT_DIR, "06_workspace_test_knowledge_btn.png"), fullPage: true });
    }
  }
});
