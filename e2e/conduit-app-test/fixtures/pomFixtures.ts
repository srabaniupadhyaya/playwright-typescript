import {test as baseTest} from "@playwright/test" // Creating alias of the playwright test
import { SignInPage } from '../page-objects/signInPage';
import {InventoryPage} from "../page-objects/inventoryPage";
import BasePage from "../page-objects/basePage";


type pages = {
    basePage: BasePage;
    signInPage: SignInPage;
    inventoryPage: InventoryPage;
}

const testPages = baseTest.extend<pages>({
    signInPage: async ({page},use) => {
        await use(new SignInPage(page));
    },
    inventoryPage: async ({page},use) => {
        await use(new InventoryPage(page));
    },
    basePage: async ({page},use) => {
        await use(new BasePage(page));
    }
})

export const test = testPages;
export const expect = testPages.expect;