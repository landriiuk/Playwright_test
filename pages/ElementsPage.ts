import { Locator, Page } from 'playwright';
import BasePage from './BasePage';

export default class ElementsPage extends BasePage {
    readonly page: Page;
    readonly elementsSubCategories: Locator;
    // readonly url: Locator;

    constructor(page: Page,) {
        // const url2 = url ?? page.goto('/elements');
        super(page, '/elements');
        this.page = page;
        this.elementsSubCategories = this.page.locator('.collapse.show .text');
    }

    async getAllSubCategories(): Promise<string[]> {
        const actualElementsArray: string[] = [];
        for (const iterator of await this.elementsSubCategories.all()) {
            actualElementsArray.push(await iterator.innerText())
        }
        return actualElementsArray;
    }

}














// const actualElementsArray: string[] = [];

// const elementsSubCategories: Locator = page.locator('.collapse.show .text');
// for (const iterator of await elementsSubCategories.all()) {
//     actualElementsArray.push(await iterator.innerText())
// }