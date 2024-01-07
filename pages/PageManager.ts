import { Locator, Page } from 'playwright';
import { LoginPage } from './LoginPage';
import BasePage from './BasePage';
import ElementsPage from './ElementsPage';
import { expect } from '@playwright/test';

export class PageManager {
    readonly page: Page;
    readonly loginPage: LoginPage;
    readonly basePage: BasePage;
    readonly elementsPage: ElementsPage;

    constructor(page: Page,) {
        this.page = page;
        this.loginPage = new LoginPage(this.page);
        this.basePage = new BasePage(this.page, '/');
        this.elementsPage = new ElementsPage(this.page);
    }

    async verifyButtonVisible(page: Page) {
        // await newPage.waitForLoadState();
        await page.waitForLoadState();
        await expect(page.locator('.navbar__tutorial-menu--text')).toBeVisible();
        await page.close();
    }

    async navigatePage(): Promise<BasePage> {
        return this.basePage;
    }

    async login() {
        return this.loginPage;
    }
    // async createUser(credentials: ICredentials) {
    //     await this.userName.click();
    //     await this.userName.fill(credentials.username);
    //     await this.password.fill(credentials.password);
    // }

}