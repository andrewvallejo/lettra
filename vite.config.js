import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';
import path from 'path';

/** @type {import('vite').UserConfig} */
export default defineConfig({
	plugins: [sveltekit()],
	resolve: {
		alias: {
			$src: path.resolve('/src'),
			$stores: path.resolve('/src/stores'),
			$components: path.resolve('/src/components'),
			$text: path.resolve('/src/components/editor/text')
		}
	}
});
