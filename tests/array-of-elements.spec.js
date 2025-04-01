import { test, expect } from "@playwright/test";

test.describe("Test Group", () => {
    //create  beforeEch to navigate to practice.cydeo.com/.
    test.beforeEach(async ({ page }) => {
        await page.goto("https://practice.cydeo.com/");
        // verify the title of the page
        await expect(page).toHaveTitle("Practice");
        expect (await page.title()).toBe("Practice");
    });
  test("test1, verify 50 links under <ul>tag", async ({ page }) => {
    let elements = await page.locator("//ul[@class='list-group']//a").all();
     expect(elements.length).toBe(50);

  });

  test("test, tags are visible and clickable", async ({ page }) => {
    let elements = await page.locator("//ul[@class='list-group']//a").all();
    // Verify each tag is visible and clickable
    for (let element of elements) {
      await expect(element).toBeVisible();
      expect(await element.isVisible()).toBeTruthy();
      await expect(element).toBeEnabled();
      expect(await element.isEnabled()).toBeTruthy();
    
    }    
  });

  test("test3,href attribute", async ({ page }) => {
    let elements = await page.locator("//ul[@class='list-group']//a").all();
    // Verify each tag is visible and clickable
    for (let element of elements) {
      expect(element).toHaveAttribute("href");
       let href = await element.getAttribute("href");
           expect(href).toBeTruthy();
            expect(href).not.toBeNull();
            expect(href).not.toBeUndefined();
    }    
  });
});
