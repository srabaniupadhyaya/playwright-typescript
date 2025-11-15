import {test as baseTest} from "@playwright/test" // Creating alias of the playwright test
import { SignInPage } from '../page-objects/signInPage';
import {InventoryPage} from "../page-objects/inventoryPage";
import BasePage from "../page-objects/basePage";

// Defining a Type for Fixture
type pages = {
    basePage: BasePage;
    signInPage: SignInPage;
    inventoryPage: InventoryPage;
}

// Extending the Base Test with custom Fixtures
const testPages = baseTest.extend<pages>({
    signInPage: async ({page},use) => {
        await use(new SignInPage(page)); // Passes it to use() so it becomes available tests.

    },
    inventoryPage: async ({page},use) => {
        await use(new InventoryPage(page));
    },
    basePage: async ({page},use) => {
        await use(new BasePage(page));
    }
})

// Exporting the Customized Test and Expect
export const test = testPages;
export const expect = testPages.expect;