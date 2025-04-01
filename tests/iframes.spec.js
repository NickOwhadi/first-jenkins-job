import { test, expect } from "@playwright/test";

test("iframe", async ({ page }) => {
    await page.goto("https://practice.cydeo.com/iframe");
    let myFrame = page.frameLocator("iframe");
    let insideFrame = myFrame.locator("#tinymce");
    await insideFrame.clear();
    await insideFrame.fill("Hello, Cydeo!");
    //wait 3 sec
    //await page.waitForTimeout(3000);
    await expect(insideFrame).toHaveText("Hello, Cydeo!");
});

