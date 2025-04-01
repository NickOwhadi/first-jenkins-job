import { test } from "@playwright/test";

  test("Perform a Google search", async ({ page }) => {
    await page.goto("https://google.com");

    // Wait for the search input to be visible and type a search query
    
    //await page.waitForSelector('input[name="q"]');
    //await page.fill('[name="q"]', "Playwright");
//

// from the drop-down list click on option that contains "Playwright"
    //await page.locator("[aria-label='playwright']").click();

    // // Press Enter to perform the search
    //await page.keyboard.press('Enter');

    // // Wait for the search results to load
   


    // // Wait for the search results to load
    //await page.waitForSelector("#search");
    // // Press Enter to perform the search
  
    // await page.press('*[name="q"]', "Enter");

    // // Verify that the search results contain the expected text
    
    //const searchResults = await page.textContent("#search");
    
    //expect(searchResults).toContain("Playwright");
  
  });
