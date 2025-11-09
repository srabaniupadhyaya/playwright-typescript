import { Locator, Page } from "@playwright/test";

export default class BasePage {
    readonly page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    /* Common method to navigate to an url */
    async navigateToUrl(url: string) {
        await this.page.goto(url);
    }

    /* Common method to fill out a form */
    async fillFormField(element: Locator, value: string) {
        await element.fill(value);
    }

    /* Common method to retrieve text of an element */
    async getElementText(element: Locator) {
        return element.innerText();
    }

    /* Common method for an element to be visible */
    async waitForElementVisible(selector: string) {
        await this.page.waitForSelector(selector,{state:"visible"});
    }

    /* Common method for an element to be hidden */
    async waitForElementHidden(selector: string) {
        await this.page.waitForSelector(selector,{state:"hidden"});
    }

    /* Common method for clicking an element */
    async clickElement(element: Locator) {
        await element.click();
    }
}