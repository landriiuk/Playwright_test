import { test, expect } from '@playwright/test';

test.describe.skip('Describe playwright test', async () => {

  test.beforeAll(async () => {
    // console.log('1');
  })

  test.beforeEach(async () => {
    // console.log('2', 'Login before each test');
    // console.log('6')
  })

  test.afterEach(async () => {
    // console.log('4');
    // UI
    // console.log('7');
  })

  test.afterAll(async () => {
    // console.log('8');
  })

  test('has title', async ({ page }) => {
    // console.log('3');
    await test.step('Navigate To Website', async () => {
      await page.goto('https://playwright.dev/');
    })
    // await page.goto('https://playwright.dev/');

    // Expect a title "to contain" a substring.
    await test.step('Verify title ', async () => {
      await expect(page).toHaveTitle(/Playwright/);
    })
  });

  test('get started link @regression', async ({ page }) => {
    // console.log('5')

    await page.goto('https://playwright.dev/');

    // Click the get started link.
    await page.getByRole('link', { name: 'Get started' }).click();
    // await page.locator('a .item')
    // await expect(page.locator('a .item')).toBe(1);
    // Expects page to have a heading with the name of Installation.
    await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  });
});