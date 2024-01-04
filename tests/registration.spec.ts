import { expect, test } from 'playwright/test';
import { userCred } from '../config/config';
import { PageManager } from '../pages/PageManager';
import { categories } from '../test-data/elements';

test.describe.skip(async () => {
    test.only('All() + for of with PAGE OBJECT @smoke', async ({ page }) => {
        let pm = new PageManager(page);
        (await pm.navigatePage()).goto('register');
        await (await pm.login()).createUser(userCred)
        // await loginPage.createUser(creds);
    });

    for (const category in categories) {
        test.only(`Check if ${category} is visible`, async ({ page }) => {
            await page.goto('/', { waitUntil: 'domcontentloaded' });
            await page.locator('div').filter({ hasText: /^Elements$/ }).nth(2).click();
            await expect.soft(page.locator(`.collapse.show .text:text-is("${categories[category]}")`)).toBeVisible();
        });
    }
});

