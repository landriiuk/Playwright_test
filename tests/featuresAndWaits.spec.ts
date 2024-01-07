import { expect } from '@playwright/test';
import { test } from '../src/fixtures/base_fixture';
import { PageManager } from '../pages/PageManager';

test.describe('wait for ...', async () => {

    test('Waits', async ({ page }) => {
        await page.goto('/books', { waitUntil: 'load', timeout: 1000 });
        // await page.goto('/12222211111116/2567654337', {waitUntil:'load', timeout:1000});
        await page.waitForURL('/books', { waitUntil: 'domcontentloaded' })
        await page.waitForLoadState();
        await page.waitForLoadState('domcontentloaded');
        // await page.waitForLoadState('networkidle');

        await page.waitForSelector('#login', { timeout: 1000 });

        // await page.waitForTimeout(20000);
        await page.waitForEvent('popup');
        // waitForEvent()
    });

    test('Download', async ({ page }) => {
        await page.goto('/upload-download');
        const promise = page.waitForEvent('download');
        await page.locator('#downloadButton').click();

        const download = await promise;

        await download.saveAs('downloads/' + 'test.jpeg');
    });

    test('Upload', async ({ page }) => {
        await page.goto('/upload-download');
        const promise = page.waitForEvent('filechooser');
        await page.locator('#uploadFile').click();
        const upload = await promise;
        await upload.setFiles(['Screenshot.png', 'sampleFile.jpeg']);
        await expect(page.locator('#uploadedFilePath')).toHaveText('C:\\fakepath\\Screenshot.png')
    });

    test('Upload advanced', async ({ page }) => {
        await page.goto('/upload-download');
        await page.locator('#uploadFile').setInputFiles('Screenshot.png');
        await page.waitForTimeout(10000);
    });

    test('Drag-n-drop', async ({ page }) => {
        await page.goto('/droppable');
        await page.locator('#draggable').dragTo(page.locator('#simpleDropContainer droppable'));
        await expect(page.locator('#simpleDropContainer #droppable')).toHaveText('Dropped!');
    });

    test('Drag-n-drop via dragAnDrop', async ({ page }) => {
        await page.goto('/droppable');
        // await page.locator('#draggable').dragTo(page.locator('#simpleDropContainer droppable'));
        await page.dragAndDrop('#draggable', '#simpleDropContainer #droppable');
        await expect(page.locator('#simpleDropContainer #droppable')).toHaveText('Dropped!');
    });

    test('Drag-n-drop via mouse', async ({ page }) => {
        await page.goto('/droppable');
        await page.locator('#draggable').hover();
        await page.mouse.down();
        await page.locator('#simpleDropContainer #droppable').hover();
        await page.mouse.up();
        //    await page.dragAndDrop('#draggable', '#simpleDropContainer #droppable');
        await expect(page.locator('#simpleDropContainer #droppable')).toHaveText('Dropped!');
    });

    test('navigate between tabs', async ({ page, context }) => {
        await page.goto('/droppable');
        const newPage = context.newPage();
        // (await newPage).goto('/foo', { timeout: 10000 });
        (await newPage).waitForTimeout(100500);
    });

    test('go to second tab', async ({ page, context }) => {
        const pm = new PageManager(page);

        await page.goto('/');
        const pagePromise = context.waitForEvent('page');
        await page.locator('.banner-image').click();
        const newPage = await pagePromise;
        pm.verifyButtonVisible(newPage);

        const pagePromise2 = context.waitForEvent('page');
        await page.locator('.banner-image').click();
        const newPage2 = await pagePromise2;
        await newPage2.waitForLoadState();
        await expect(newPage2.locator('.navbar__tutorial-menu--text')).toBeVisible();
    });

    test('visual testing', async ({ page }) => {
        await page.goto('/droppable');
        await expect(page).toHaveScreenshot('expected.png', { maxDiffPixelRatio: 0.1});
    });

    test.only('visual testing snapshot', async ({ page }) => {
        await page.goto('https://demoqa.com/alerts');
         expect(await page.textContent('#alertButton')).toMatchSnapshot('/test/featuresAndWaits.spec.ts-snapshots/testSnapshot.txt');
        // await expect(page).toHaveScreenshot('expected.png', { maxDiffPixelRatio: 0.1});
    });
});

