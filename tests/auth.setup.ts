import { test, expect } from '@playwright/test';
import fs from 'fs';

test('authenticate and save state', async ({ page }) => {
  // Navigate to the login page
  await page.goto('https://ecommerce-playground.lambdatest.io/');
  await page.hover("//*[@id='widget-navbar-217834']/ul/li[6]/a/div/span")
  //await page.click("text=Login")
  await page.click("'Login'")
  await page.click("//*[@value='Login']")
  // Fill in username and password fields
  await page.fill("//*[@id='input-email']","srabaniupadhyaya@yahoo.com")
  await page.fill("//*[@id='input-password']","Test@123")


  // Submit the login form
  await page.click("//*[@value='Login']")

  // Wait for navigation to complete
  //await page.waitForNavigation();

  // Save the storage state to a file
  const storageState = await page.context().storageState();
  fs.writeFileSync('storageState.json', JSON.stringify(storageState));
});
