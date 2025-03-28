import {chromium, test,expect} from "@playwright/test"
import { console } from "inspector";

test("how to handle alerts",async ({page}) =>
{   
    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo");

    page.on("dialog",async(alert)=>{
        const alertMsg=alert.message();
        console.log(alertMsg);
       await alert.accept();
    })

    await page.locator("button:has-text('Click Me')").nth(0).click();
    
})

test.only("Modal alert", async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-modal-demo")
    await page.click("//button[@data-target='#myModal']")
    await page.click("(//button[text()='Save Changes'])[1]")
})
