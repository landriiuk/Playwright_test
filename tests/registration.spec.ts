import { test } from 'playwright/test';
import { config } from '../config/config';
import { PageManager } from '../pages/PageManager';
test.describe.only(async () => {
    test.only('All() + for of with PAGE OBJECT @smoke', async ({ page }) => {
        // let basePage = new BasePage(page);
        // let loginPage = new LoginPage(page);
        let pm = new PageManager(page);
        (await pm.navigatePage()).goto('register');
        // await basePage.goto('register');

        const creds: ICredentials = {
            password: config.password,
            username: config.userName,
        }

            // const creds2:ICredentials = {
            //     password:process.env.PASSWORD,
            //     username:process.env.USERNAME,
            // }
            await (await pm.login()).createUser(creds)
        // await loginPage.createUser(creds);
    });

    test.only('test parametrization', async () => {
        // await page.goto('/', { waitUntil: 'domcontentloaded' });
        // // const elementsCategory: Locator = page.locator('div').filter({ hasText: /^Elements$/ }).nth(2)
        // // await elementsCategory.click();
        // const elementsCategory: Locator = page.locator('.card-body', { has: page.getByText('Elements') });
        // // const getNumber: number = await elementsCategory.count();
        // await elementsCategory.click();
        // const expectedElementsArray: string[] = [
        //     'Text Box',
        //     'Check Box',
        //     'Radio Button',
        //     'Web Tables',
        //     'Buttons',
        //     'Links',
        //     'Broken Links - Images',
        //     'Upload and Download',
        //     'Dynamic'
        // ]
        // // const array: string[] = await page.locator('.collapse.show .text').allInnerTexts();
        // // console.log(array);
        // const actualElementsArray: string[] = [];

    // const expandedElementsCount: number = await page.locator(`.collapse.show .text:text-is()`)

        // for (let index = 0; index < expandedElementsCount; index++) {
        //     let textElement: string = await page.locator('.collapse.show .text').nth(index).innerText();
        //     actualElementsArray.push(textElement);
        // }
        // expect(actualElementsArray).toEqual(expectedElementsArray);
    });


});

