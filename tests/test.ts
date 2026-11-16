import { expect, test } from '@playwright/test';

test('the editor links repeated wordiables in a cover letter', async ({ page }) => {
	test.setTimeout(45_000);
	await page.goto('/');
	await expect(page).toHaveTitle('Lettra');

	const editor = page.locator('#editor');
	await expect(editor).toHaveValue(/Hit any key to clear editor and begin!$/, { timeout: 20_000 });
	await editor.press('Space');
	await editor.fill('Dear \\OmniBark\\ Hirer \\OmniBark\\');
	await expect(page.locator('button.wordiable')).toHaveCount(2);
});

test('escaped text renders safely and inline editing can be cancelled', async ({ page }) => {
	test.setTimeout(45_000);
	await page.goto('/');
	const editor = page.locator('#editor');
	await expect(editor).toHaveValue(/Hit any key to clear editor and begin!$/, { timeout: 20_000 });
	await editor.press('Space');
	await editor.fill('Dear \\OmniBark\\ Hirer \\OmniBark\\ <img src=x onerror=alert(1)>');
	await expect(page.locator('button.wordiable')).toHaveCount(2);
	await expect(page.locator('.live-text img')).toHaveCount(0);
	await page.locator('button.wordiable').first().dblclick();
	const input = page.locator('.live-text input');
	await expect(input).toBeVisible();
	await input.fill('Starlight');
	await input.press('Escape');
	await expect(editor).toHaveValue(
		'Dear \\OmniBark\\ Hirer \\OmniBark\\ <img src=x onerror=alert(1)>'
	);
});

test('inline replacement updates repeated wordiables', async ({ page }) => {
	test.setTimeout(45_000);
	await page.goto('/');
	const editor = page.locator('#editor');
	await expect(editor).toHaveValue(/Hit any key to clear editor and begin!$/, { timeout: 20_000 });
	await editor.press('Space');
	await editor.fill('Dear \\OmniBark\\ Hirer \\OmniBark\\');
	await page.locator('button.wordiable').first().dblclick();
	const input = page.locator('.live-text input');
	await input.fill('Starlight');
	await input.press('Enter');
	await expect(editor).toHaveValue('Dear \\Starlight\\ Hirer \\Starlight\\ ');
});
