import { test as base } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import ElementsPage from '../../pages/ElementsPage';
import { userCred } from '../../config/config';
import { WelcomePage } from '../../pages/BookStore/WelcomePage';
type MyFixture = {
    elementsArray: string[],
    login: LoginPage,
    elementsPage: ElementsPage,
    welcomePage: WelcomePage;
}

 const test = base.extend<MyFixture>({
// const test = base.extend<{ elementsArray: string[] }>({
    elementsArray: [
        'Text Box',
        'Check Box',
        'Radio Button',
        'Web Tables',
        'Buttons',
        'Links',
        'Broken Links - Images',
        'Upload and Download',
        'Dynamic Properties'
    ],
    login: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await loginPage.navigateTo();
        await loginPage.login(userCred);;
        console.log('BEFORE!!!');
        await use(loginPage);
        console.log('AFTER');
        await loginPage.logout();
    },
    elementsPage: async ({ page }, use) => {
        await use(new ElementsPage(page));
    },
    welcomePage: async ({ page }, use) => {
        await use(new WelcomePage(page));
    }
});

export { test };