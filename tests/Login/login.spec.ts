import { PageManager } from '../../pages/PageManager';
import { userCred } from '../../config/config';
import { test } from '../../src/fixtures/base_fixture';
import { expect } from 'playwright/test';
import { storageStatePath } from '../../src/links/path';

// test.use({ storageState: storageStatePath })
// test.use({ storageState: { cookies: [], origins: [] } })

test.describe(async () => {

    test('User login', async ({ login, welcomePage }) => {
        // BASE FIXTURE = login
        await expect(login.loginButton).not.toBeVisible();
        await expect(welcomePage.searchBox).toBeVisible();
        // await context.storageState({ path: storageStatePath })
        // AFTER
    });

    test('Without fixtures', async ({ page }) => {
        let pm = new PageManager(page);
        (await pm.navigatePage()).goto('register');
        await (await pm.login()).createUser(userCred);
    })
});

