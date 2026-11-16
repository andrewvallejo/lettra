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
