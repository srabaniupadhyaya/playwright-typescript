import {chromium, test} from "@playwright/test"

test("Login test demo",async ()=>
{
    const browser= await chromium.launch(
        {
            headless:false
        });
    const context =await browser.newContext();
    const page=await context.newPage();

    await page.goto("https://ecommerce-playground.lambdatest.io/");
   // await page.hover("//a[@data-toggle='dropdown']//span{contains(.,'My account')]")
   await page.hover("//*[@id='widget-navbar-217834']/ul/li[6]/a/div/span")
   //await page.click("text=Login")
   await page.click("'Login'")
   await page.fill("//*[@id='input-email']","srabaniupadhyaya@yahoo.com")
   await page.fill("//*[@id='input-password']","Test@123")
   await page.click("//*[@value='Login']")

})