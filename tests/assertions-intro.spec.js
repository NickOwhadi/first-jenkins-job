import { test, expect } from "@playwright/test";

test.describe("Test Group", () => {
  // create beforeEach hook to navigate to this url:https://practice.cydeo.com/.
  test.beforeEach(async ({ page }) => {
    await page.goto("https://practice.cydeo.com/");
    //verify the title of the page
    await expect(page).toHaveTitle("Practice");
    expect (await page.title()).toBe("Practice");

  });
 
  test("Verify check boxes are checked", async ({ page }) => {
    await page.getByText("Checkboxes").click();
    let checkBox1 = page.locator("#box1");
    let checkBox2 = page.locator("#box2");
    await checkBox1.check();
    await checkBox2.check();
    await expect(checkBox1).toBeChecked();
    await expect(checkBox2).toBeChecked();
    expect(await checkBox2.isChecked()).toBeTruthy();
    expect(await checkBox1.isChecked()).toBeTruthy();
    
    //timeout(3000)
    //await page.waitForTimeout(3000); 
  });

  test("Verify check boxes are unchecked", async ({ page }) => {
    await page.getByText("Checkboxes").click();
    let checkBox1 = page.locator("#box1");
    let checkBox2 = page.locator("#box2");
    await checkBox1.uncheck();
    await checkBox2.uncheck();
    await expect(checkBox1).not.toBeChecked();
    await expect(checkBox2).not.toBeChecked();
    expect(await checkBox2.isChecked()).toBeFalsy();
    expect(await checkBox1.isChecked()).toBeFalsy();
    
  });

  test("Verify text of element", async ({ page }) => {
    let headerElement = page.locator(".h1y");
    await expect(headerElement).toHaveText("Test Automation Practice");
    expect(await headerElement.innerText()).toBe("Test Automation Practice");
    let actualText = await headerElement.innerText();
    expect(actualText).toBe("Test Automation Practice");
    expect(actualText).toEqual("Test Automation Practice");
  });
});
