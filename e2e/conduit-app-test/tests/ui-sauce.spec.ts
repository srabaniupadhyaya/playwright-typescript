import {expect,test} from '@playwright/test';
import config from '../../../config/config.json';
import { LandingPage } from '../page-objects/landingPage';
import { SignInPage } from '../page-objects/signInPage';

let landingPage :LandingPage;
let signInPage :SignInPage;


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
    await page.goto(config.hosts.conduitUi);
    await page.setDefaultNavigationTimeout(2000);
    await page.pause();
    signInPage =new SignInPage(page);
    landingPage =new LandingPage(page);
    await landingPage.signInButton.click();
    await signInPage.loginValidCreds('playwrightdemo@gmail.com', 'playwrightdemo');

})
