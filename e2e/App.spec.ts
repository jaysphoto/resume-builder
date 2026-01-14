import { test, expect } from './baseFixtures';

test('default page is the resume', async ({ page }) => {
    await page.goto("/");

    await expect(page).toHaveTitle(/Jay \(Geoffrey\) De Kleijn/);
    await expect(page.locator('header')).toHaveText(/Jay \(Geoffrey\) De Kleijn/);
});

test('non-existing page has 404 message', async ({ page }) => {
    await page.goto("/not-found/");

    await expect(page).toHaveTitle(/Jay \(Geoffrey\) De Kleijn/);
    await expect(page.locator('h1')).toHaveText(/404/);
});
