import { test } from "@playwright/test";

test("@env-test", async ({ page }) => {
  // print usernaem and password from .env  Test body
  const username = process.env.PRACTICE_USERNAME;
  const password = process.env.PRACTICE_PASSWORD;

  console.log("Username:", username);
  console.log("Password:", password);

});

test("url embedded authentication2", async ({ page }) => {
  let encodedCredentials = Buffer.from(
    `${process.env.PRACTICE_USERNAME}:${process.env.PRACTICE_PASSWORD}`
  ).toString("base64");
  await page.setExtraHTTPHeaders({
    Authorization: `Basic ${encodedCredentials}`,
  });
  await page.goto("https://practice.cydeo.com/basic_auth/");
});