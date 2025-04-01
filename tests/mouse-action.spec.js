import { test, expect} from "@playwright/test";

test.describe("Test Group", () => {
    // create beforeEch to navigate to practice.cydeo.com/.
    test.beforeEach(async ({ page }) => {
        await page.goto("https://practice.cydeo.com/");
        // verify the title of the page
        await expect(page).toHaveTitle("Practice");
        expect (await page.title()).toBe("Practice");
    });
    // create afterEach hook to wait for 3 sec
    test.afterEach(async ({ page }) => {
        await page.waitForTimeout(1000);
    });
  test("Left Click", async ({ page }) => {
    page.click("text=A/B Testing");
  });

  test("Right Click", async ({ page }) => {
    page.click("text=A/B Testing", { button: "right" });
  });

  
  test("Hover", async ({ page }) => {
    await page.click("text=Hovers");
    await page.hover("(//div[@class='figure'])[1]");
    await page.click("text=View profile");
    //await page.waitForTimeout(3000);
    // verify this text on page:Sinatra doesn’t know this ditty.
    expect(page.locator("text=Sinatra doesn’t know this ditty.")).toHaveText("Sinatra doesn’t know this ditty.");
  });

  test("Hover2", async ({ page }) => {
    await page.click("text=Hovers");
    let elements = await page.locator("//div[@class='figure']").all();
    for (let element of elements) {
      await element.hover();
      await page.waitForTimeout(1000);
    }
    
  });

  test("Scrolling", async ({ page }) => {
    page.mouse.wheel(0,1000);
  });

  test("Scrolling to elementand click", async ({ page }) => {
    await page.locator("text=Inputs").click();
  });

  test("Drag and Drop", async ({ page }) => {
    await page.locator("text='Drag and Drop'").click();
    await page.dragAndDrop("#column-a", "#column-b");
    await page.waitForTimeout(2000);
    await page.dragAndDrop("#column-b", "#column-a");


  });
});
