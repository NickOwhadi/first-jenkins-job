//const {test} = require("@playwright/test");

import {test} from "@playwright/test";


test("", async({page})=>{
    // test code here
    await page.goto("https://google.com");
    await page.waitForTimeout(3000);
});