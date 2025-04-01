import { test } from "@playwright/test";

test("Getting the title of the page", async ({ page }) => {
  // go to practice.cydeo.com
  await page.goto("https://practice.cydeo.com/");
  // get the title of the page
  let actualTitle = await page.title();
  console.log("Title of the page:", actualTitle);
});

test("Getting the size of the page", async ({ page }) => {
  // go to practice.cydeo.com
  await page.goto("https://practice.cydeo.com/");
  await page.waitForTimeout(3000);
  page.setViewportSize({ width: 1850, height: 1080 });
  await page.waitForTimeout(3000);
});

test("Getting the URL of the page", async ({ page }) => {
  // go to practice.cydeo.com
  await page.goto("https://practice.cydeo.com/");
  // get the title of the page
  let actualURL = page.url();
  console.log("web address is: ", actualURL);
});