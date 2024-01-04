import { Locator, Page } from 'playwright';

export default class BasePage {
    readonly page: Page;
    readonly elementsCategory: Locator;
    readonly url: string;

    constructor(page: Page, url:string) {
        this.page = page;
        this.elementsCategory = this.page.locator('.card-body', { has: page.getByText('Elements') });
         this.url = url
    }

    async navigateTo(){
        await this.page.goto(this.url);
    }

    async openElementsCategory(): Promise<void> {
        await this.elementsCategory.click();
    }

    async goto(url: string = '/') {
        this.page.goto(url, { waitUntil: 'domcontentloaded' });
    }
}