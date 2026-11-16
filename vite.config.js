import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';
import path from 'path';
import adapter from '@sveltejs/adapter-auto';
import * as sass from 'sass';
import sveltePreprocess from 'svelte-preprocess';

/** @type {import('vite').UserConfig} */
export default defineConfig({
	plugins: [
		sveltekit({
			adapter: adapter(),
			preprocess: [sveltePreprocess({ sass: { sync: true, implementation: sass }, postcss: true })]
		})
	],
	server: {
		port: 3000
	},
	resolve: {
		alias: {
			$stores: path.resolve('/src/stores'),
			$components: path.resolve('/src/components'),
			$text: path.resolve('/src/components/editor/text'),
			$types: path.resolve('/src/types.d.ts'),
			$editor: path.resolve('/src/lib/editor')
		}
	}
});
