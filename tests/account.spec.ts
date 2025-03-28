import { test, expect } from '@playwright/test';

// Configure the test to use the saved storage state
try {
    test.use({ storageState: 'storageState.json' });
  } catch (error) {
    console.error('Error reading storage state:', error);
  }
test('test login with authenticated state', async ({ page }) => {
  // Navigate to a protected page
  await page.goto('https://ecommerce-playground.lambdatest.io/');

  // Perform assertions to verify the user is authenticated
  await page.hover("//*[@id='widget-navbar-217834']/ul/li[6]/a/div/span")
  expect(page.getByRole('link', { name: 'Logout' })).toBeVisible

});
