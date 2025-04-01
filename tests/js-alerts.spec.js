import { test } from "@playwright/test";
import { text } from "stream/consumers";

test.describe("Test Group", () => {
    // create beforeEch to navigate to practice.cydeo.com/.
  test.beforeEach(async ({ page }) => {
    await page.goto("https://practice.cydeo.com/javascript_alerts");
  });
  test("Regular Alert", async ({ page }) => {
    page.on("dialog", async (alert) => {
      await page.waitForTimeout(5000);
      alert.accept();
      await page.waitForTimeout(5000);
    });
    let alertButton = page.locator('text=Click for JS Alert');
    await alertButton.click();
    await page.waitForTimeout(5000);
  });

  test("dismiss", async ({ page }) => {
    page.on("dialog", async (dialog) => {
      await page.waitForTimeout(5000);
      await dialog.dismiss();
    });
    let alertButton = page.locator("text=Click for JS Confirm");
    await alertButton.click();
    await page.waitForTimeout(5000);
    
  });

  test("message", async ({ page }) => {
    page.on("dialog", async (dialog) => {
      await page.waitForTimeout(5000);
      await dialog.accept("Hello from Playwright!");
      await page.waitForTimeout(5000);
    });
    let alertButton = page.locator("text=Click for JS Prompt");
    await page.waitForTimeout(5000);
    await alertButton.click();
    await page.waitForTimeout(5000);
  });
});
