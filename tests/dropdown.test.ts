import { test } from "@playwright/test";


test("handling dropdown", async ({ page }) => {


    await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo");
    await page.selectOption("#select-demo", {
        // label: "Tuesday"
        // value: "Friday"
        index: 3
    })
    await page.waitForTimeout(4000);

    await page.selectOption("#multi-select", [
        {
            label: "Texas"
        }, {
            index: 1
        }, {
            value: "Washington"
        }
    ])
})
test.only("Bootstrap dropdown", async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/jquery-dropdown-search-demo");
    await selectCountry("India");
    await selectCountry("Denmark");
    await selectCountry("Australia");
    await page.waitForTimeout(3000)

    async function selectCountry(countryName) {
        await page.click("#country+span");
        await page.locator("ul#select2-country-results")
            .locator("li", {
                hasText: countryName
            }).click();
    }
})
