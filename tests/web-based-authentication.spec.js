import { test } from "@playwright/test";
import { buffer } from "stream/consumers";

test("url embedded authentication", async ({ page }) => {
  // navigate to pra
  await page.goto("https://admin:admin@practice.cydeo.com/basic_auth/");
});

test("url embedded authentication2", async ({ page }) => {
  let encodedCredentials = Buffer.from("admin:admin").toString("base64");
  await page.setExtraHTTPHeaders({'Authorization': `Basic ${encodedCredentials}`});
  await page.goto("https://practice.cydeo.com/basic_auth/");
});