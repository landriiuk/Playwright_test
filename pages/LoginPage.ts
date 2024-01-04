import { Locator, Page } from 'playwright';
import BasePage from './BasePage';

export class LoginPage extends BasePage {
    readonly page: Page;
    readonly userName: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;
    readonly logoutButton: Locator;

    constructor(page: Page) {
        super(page, '/login');
        this.page = page;
        this.userName = this.page.locator('#userName');
        this.password = this.page.locator('#password');
        this.loginButton = this.page.locator('#login');
        this.logoutButton = this.page.getByText('Log out');
    }

    async createUser(credentials: ICredentials): Promise<void> {
        await this.userName.click();
        await this.userName.fill(credentials.username);
        await this.password.fill(credentials.password);
    }

    async login(credentials: ICredentials): Promise<void> {
        await this.userName.fill(credentials.username);
        await this.password.fill(credentials.password);
        await this.loginButton.click();
    }

    async logout(): Promise<void> {
        await this.logoutButton.click();
    }
}