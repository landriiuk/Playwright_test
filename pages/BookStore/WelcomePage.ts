// searchBox

import { Locator, Page } from 'playwright';

export class WelcomePage {

    private page: Page;
    readonly searchBox: Locator;

    constructor(page: Page) {
        this.page = page
        this.searchBox = this.page.locator('#searchBox');
    }

    

}