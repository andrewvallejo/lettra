import adapter from '@sveltejs/adapter-auto';

import * as sass from 'sass';
import sveltePreprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		sveltePreprocess({
			sass: {
				sync: true,
				implementation: sass
			},

			postcss: true
		})
	],
	kit: {
		adapter: adapter()
	}
};

export default config;
