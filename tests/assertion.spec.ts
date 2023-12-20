import { Locator, expect, test } from 'playwright/test';

test.describe.only(async () => {

    test('All() + for of', async ({ page }) => {
        expect(1).toBe(1);
        expect([11, 11], "I know that this part will fail").toBe([11, 11]);

        expect([11, 11]).toEqual([11, 11]);
    });


    test('Check to have url ', async ({ page }) => {
        //toHaveURL
        await page.goto('radio-button', { waitUntil: 'domcontentloaded' });
        // await page.toHaveUrl('/');
        await expect(page).toHaveURL('/radio-button');

        await expect(page.locator('input')).not.toBeHidden();
        await expect(page.locator('input')).toHaveCSS('display', 'flex');
        await expect(page.locator('input')).not.toHaveCSS('background-color', 'rgb(129, 102, 130)');

    })
});

