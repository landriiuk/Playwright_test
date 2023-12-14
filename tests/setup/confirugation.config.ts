import { expect, test } from 'playwright/test';

test('Check if 1 equal 1', async () => {
    console.log('PROJECT SETUP');
    expect(1).toBe(1);
});