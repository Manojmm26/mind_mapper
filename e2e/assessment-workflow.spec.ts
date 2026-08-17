import { test, expect } from "@playwright/test";

test.describe("AI Mind Mapper Workflow Modes & E2E Verification", () => {
  test("Workflow Mode Toggle Switching (Learn, Compare, Assess)", async ({ page }) => {
    await page.goto("http://localhost:3000/?experience=classic", { waitUntil: "domcontentloaded" });
    await page.waitForTimeout(1000);

    // If workspace view is active, click back button to return to home page
    const backBtn = page.locator("button[aria-label='Back to start']").first();
    if (await backBtn.isVisible({ timeout: 2000 }).catch(() => false)) {
      await backBtn.click();
      await page.waitForTimeout(1000);
    }

    const learnBtn = page.locator("button", { hasText: "Learn" }).first();
    const compareBtn = page.locator("button", { hasText: "Compare" }).first();
    const assessBtn = page.locator("button", { hasText: "Assess" }).first();
    const input = page.locator("input[type='text']").first();

    await expect(learnBtn).toBeVisible({ timeout: 15000 });
    await expect(compareBtn).toBeVisible({ timeout: 15000 });
    await expect(assessBtn).toBeVisible({ timeout: 15000 });

    // Click Assess Mode
    await assessBtn.click();
    await expect(input).toHaveAttribute("placeholder", "Test how much you know about any topic...");

    // Click Compare Mode
    await compareBtn.click();
    await expect(input).toHaveAttribute("placeholder", "Compare any product, tool, or topic...");

    // Click Learn Mode
    await learnBtn.click();
    await expect(input).toHaveAttribute("placeholder", "Visualize any concept...");
  });
});
