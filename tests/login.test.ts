import {chromium, test,expect} from "@playwright/test"

test("Login test demo",async ()=>
{
    const browser= await chromium.launch();
    const context =await browser.newContext();
    const page=await context.newPage();
    const email = process.env.email || "default@example.com";
    const pass=process.env.password || "pass";

    await page.goto("https://ecommerce-playground.lambdatest.io/");
   // await page.hover("//a[@data-toggle='dropdown']//span{contains(.,'My account')]")
   await page.hover("//*[@id='widget-navbar-217834']/ul/li[6]/a/div/span")
   //await page.click("text=Login")
   await page.click("'Login'")
   await page.fill("//*[@id='input-email']", email);
   await page.fill("//*[@id='input-password']",pass);
   await page.click("//*[@value='Login']")

   //We now see some basic interactions with the controls and the assertions for them

   await page.getByText(" Edit your account information").click();
   const txtFirstName= page.locator("#input-firstname");
   expect(txtFirstName).toHaveAttribute("value","Srabani");
   

})