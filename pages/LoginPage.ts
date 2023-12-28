import { Locator, Page } from 'playwright';

export class LoginPage {
    readonly page: Page;
    readonly userName: Locator;
    readonly password: Locator;
    constructor(page: Page) {
        this.page = page;
        this.userName = this.page.locator('#userName');
        this.password = this.page.locator('#password');
    }

    async createUser(credentials: ICredentials) {
        await this.userName.click();
        await this.userName.fill(credentials.username);
        await this.password.fill(credentials.password);
    }

}