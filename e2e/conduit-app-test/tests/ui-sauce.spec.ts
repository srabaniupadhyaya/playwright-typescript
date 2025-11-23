import {expect,test} from '@playwright/test';
import config from '../../../config/config.json';
import { SignInPage } from '../page-objects/signInPage';
import {InventoryPage} from "../page-objects/inventoryPage";

let signInPage :SignInPage;
let inventoryPage :InventoryPage;


test.afterEach(async ({ page }, testInfo) => {
    const screenshotPath = `screenshots/${testInfo.title.replace(/\s+/g, '_')}.png`;
    await page.screenshot({ path: screenshotPath, fullPage: true });
    testInfo.attachments.push({
        name: 'screenshot',
        path: screenshotPath,
        contentType: 'image/png',
    });
});

test('Should validate login authentication', async ({ page }) => {
    await page.goto(config.hosts.sauceUi);
    page.setDefaultNavigationTimeout(2000);
    signInPage =new SignInPage(page);
    inventoryPage = new InventoryPage(page);
    await signInPage.loginValidCred(config.sauceUser.userName, config.sauceUser.password);
    await expect(inventoryPage.productTitle).toBeVisible();
})
