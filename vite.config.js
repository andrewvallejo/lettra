import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';
import path from 'path';

/** @type {import('vite').UserConfig} */
export default defineConfig({
	plugins: [sveltekit()],
	resolve: {
		alias: {
			$stores: path.resolve('/src/stores'),
			$components: path.resolve('/src/components'),
			$words: path.resolve('/src/components/editor/words'),
			$types: path.resolve('/src/types.d.ts'),
			$editor: path.resolve('/src/lib/editor')
		}
	}
});
