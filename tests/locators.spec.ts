import { Locator, expect, test } from 'playwright/test';

test.describe.skip(async () => {

    test.skip('Get locator by text', async ({ page }) => {
        await page.goto('/');
        const elementsCategory: Locator = page.getByText('Elements');
        await elementsCategory.click();
    });

    test('Get locator by locator', async ({ page }) => {
        await page.goto('/');
        // const elementsCategory: Locator = page.locator('.card-body');
        const elementsCategory: Locator = page.locator('.card-body', { hasText: 'Elements' });
        await elementsCategory.click();
        //locator('div').filter({ hasText: /^Elements$/ }).nth(2)
    });

    test('Get locator by locator + filter', async ({ page }) => {
        await page.goto('/', { waitUntil: 'domcontentloaded' });
        // const elementsCategory: Locator = page.locator('div').filter({ hasText: /^Elements$/ }).nth(2)
        // await elementsCategory.click();
        const elementsCategory: Locator = page.locator('.card-body', { has: page.getByText('Elements') });
        // const getNumber: number = await elementsCategory.count();
        await elementsCategory.click();
    });

    test('Should home img be visible ', async ({ page }) => {
        // Selenium Online Training
        await page.goto('/', { waitUntil: 'domcontentloaded' });
        const elementsCategory: Locator = page.getByAltText('Selenium Online Training');
        await expect(elementsCategory).toBeVisible();
    });
});
