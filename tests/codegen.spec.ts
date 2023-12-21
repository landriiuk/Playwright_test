import { test, expect } from '@playwright/test';
test.describe.skip('Code gen tool', async () => {

    test('test', async ({ page }) => {
        await page.goto('https://demoqa.com/');
        await page.locator('svg').first().click();
        await page.getByText('Buttons').click();
        await page.getByRole('button', { name: 'Double Click Me' }).click();
        await page.getByRole('button', { name: 'Double Click Me' }).click();
        await page.getByRole('button', { name: 'Double Click Me' }).dblclick();
        await page.getByRole('button', { name: 'Right Click Me' }).click({
            button: 'right'
        });
        await page.pause();
        await page.getByRole('button', { name: 'Click Me', exact: true }).click();
        await page.getByText('You have done a double click').click();
        await page.getByText('You have done a right click').click();
        await page.getByText('You have done a dynamic click').click();
        await expect(page.locator('#doubleClickMessage')).toContainText('You have done a double click');
        await page.getByText('You have done a right click').click();
        await page.getByText('You have done a dynamic click').click();
    });

    test('test 123', async ({ page }) => {
        await page.goto('https://demoqa.com/');
        await page.locator('div:nth-child(2) > div > .avatar > svg').click();
        await page.getByText('Practice Form').click();
        await page.getByPlaceholder('First Name').click();
        await expect(page.getByPlaceholder('First Name')).toBeEmpty();
        await page.getByPlaceholder('First Name').fill('12345');
        await page.getByPlaceholder('First Name').press('Enter');
        await expect(page.getByPlaceholder('First Name')).toHaveValue('12345');
        await page.getByPlaceholder('Last Name').fill('12345');
        await page.getByPlaceholder('Last Name').press('Enter');
        await expect(page.getByPlaceholder('Last Name')).toHaveValue('12345');
    });


});