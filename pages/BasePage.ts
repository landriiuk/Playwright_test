import { Locator, Page } from 'playwright';

export default class BasePage {
    readonly page: Page;
    readonly elementsCategory: Locator;
    // readonly url: Locator;

    constructor(page: Page,) {
        this.page = page;
        this.elementsCategory = this.page.locator('.card-body', { has: page.getByText('Elements') });
        // this.url = url
    }

    async openElementsCategory(): Promise<void> {
        await this.elementsCategory.click();
    }

    async goto(url: string = '/') {
        this.page.goto(url, { waitUntil: 'domcontentloaded' });
    }
}