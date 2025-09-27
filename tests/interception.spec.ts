import { test, expect } from '@playwright/test';

test('Dropdown selections should match API response', async ({ page }) => {
  await page.goto('https://www.globalsqa.com/demo-site/select-dropdown-menu/');

  // Intercept API call
  await page.route('https://jsonplaceholder.typicode.com/users', async (route) => {
    const response = await route.request().response();
    const json = await response?.json();

    // Log the API response
    console.log('Intercepted API Response:', json.map((user: any) => user.name));

    route.continue(); // Allow the request to proceed normally
  });

  // Locate dropdown
  const dropdown = page.locator('select'); // Adjust based on website structure
  const displayedName = page.getByRole('combobox'); // Modify selector if needed

  // Fetch API data separately to validate UI
  const apiResponse = await fetch('https://jsonplaceholder.typicode.com/users');
  const apiData = await apiResponse.json();
  const dropdownValues = apiData.map((user: any) => user.name);

  // Loop through API values and validate dropdown selections
  for (const value of dropdownValues.slice(0, 5)) { // Limiting for efficiency
    console.log(value)
    //await dropdown.selectOption(value); // Select option in dropdown
    const options = await dropdown.locator('option').allInnerTexts();
console.log('Available Options:', options); // Log all option values
await dropdown.selectOption({ label: 'United States' }); // Example selection
    const selectedName = await displayedName.innerText(); // Capture displayed name
    expect(selectedName).toContain(value); // Validate match with API response
  }
});