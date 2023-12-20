import { Locator, expect, test } from 'playwright/test';

test.describe.skip(async () => {

    test('Get locator by text', async ({ page }) => {
        await page.goto('/');

    });

    // test('Get locator by locator + filter', async ({ page }) => {

    // });

    test('Count + verify array text', async ({ page }) => {
        await page.goto('/', { waitUntil: 'domcontentloaded' });
        // const elementsCategory: Locator = page.locator('div').filter({ hasText: /^Elements$/ }).nth(2)
        // await elementsCategory.click();
        const elementsCategory: Locator = page.locator('.card-body', { has: page.getByText('Elements') });
        // const getNumber: number = await elementsCategory.count();
        await elementsCategory.click();
        const expectedElementsArray: string[] = [
            'Text Box',
            'Check Box',
            'Radio Button',
            'Web Tables',
            'Buttons',
            'Links',
            'Broken Links - Images',
            'Upload and Download',
            'Dynamic'
        ]
        // const array: string[] = await page.locator('.collapse.show .text').allInnerTexts();
        // console.log(array);
        const actualElementsArray: string[] = [];

        const expandedElementsCount: number = await page.locator('.collapse.show .text').count();

        for (let index = 0; index < expandedElementsCount; index++) {
            let textElement: string = await page.locator('.collapse.show .text').nth(index).innerText();
            actualElementsArray.push(textElement);
        }
        expect(actualElementsArray).toEqual(expectedElementsArray);
    });


    test('All() + for of', async ({ page }) => {
        await page.goto('/', { waitUntil: 'domcontentloaded' });
        const elementsCategory: Locator = page.locator('.card-body', { has: page.getByText('Elements') });
        await elementsCategory.click();
        const expectedElementsArray: string[] = [
            'Text Box',
            'Check Box',
            'Radio Button',
            'Web Tables',
            'Buttons',
            'Links',
            'Broken Links - Images',
            'Upload and Download',
            'Dynamic Properties'
        ]
        const actualElementsArray: string[] = [];

        const elementsSubCategories: Locator = page.locator('.collapse.show .text');
        for (const iterator of await elementsSubCategories.all()) {
            actualElementsArray.push(await iterator.innerText())
        }

        expect(1).toBe(1);
        expect([11, 11]).toEqual([11, 11]);
        expect(actualElementsArray).toEqual(expectedElementsArray);
    });

    test('Check and verify if checked', async ({ page }) => {
        await page.goto('/', { waitUntil: 'domcontentloaded' });
        const elementsCategory: Locator = page.locator('.card-body', { has: page.getByText('Elements') });
        await elementsCategory.click();
        await page.getByText('Radio Button').click();
        const yesCheckbox: Locator = page.locator('#yesRadio');
        await yesCheckbox.check({ force: true });
        await expect(yesCheckbox).toBeChecked();
        await yesCheckbox.uncheck({ force: true });
        await expect(yesCheckbox).not.toBeChecked();
    });


    test('Fill, type, ', async ({ page }) => {
        await page.goto('/', { waitUntil: 'domcontentloaded' });

        const input: Locator = page.locator('input')
        await input.fill('some text');
        await input.type('some text');
        await input.pressSequentially('some text', { delay: 500 });
    });


});

