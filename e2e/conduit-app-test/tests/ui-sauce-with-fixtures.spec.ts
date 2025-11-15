import {expect,test} from '../fixtures/pomFixtures';
import config from '../../../config/config.json';


test.afterEach(async ({ page , signInPage , inventoryPage }, testInfo) => {
    const screenshotPath = `screenshots/${testInfo.title.replace(/\s+/g, '_')}.png`;
    await page.screenshot({ path: screenshotPath, fullPage: true });
    testInfo.attachments.push({
        name: 'screenshot',
        path: screenshotPath,
        contentType: 'image/png',
    });
});

test('Should validate login authentication', async ({ page, signInPage, inventoryPage }) => {
    await page.goto(config.hosts.sauceUi);
    page.setDefaultNavigationTimeout(2000);
    await signInPage.loginValidCred(config.sauceUser.userName, config.sauceUser.password);
    await expect(inventoryPage.productTitle).toBeVisible();
    await expect(inventoryPage.inventoryContainer).toHaveScreenshot();
})
