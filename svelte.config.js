import adapter from '@sveltejs/adapter-auto';

import * as sass from 'sass';
import sveltePreprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: sveltePreprocess({
		sass: {
			sync: true,
			implementation: sass
		}
	}),
	kit: {
		adapter: adapter()
	},
	vitePlugin: {
		experimental: {
			inspector: {
				// change shortcut
				toggleKeyCombo: 'meta-shift',
				// hold and release key to toggle inspector mode
				holdMode: true,
				// show or hide the inspector option
				showToggleButton: 'never',
				// inspector position
				toggleButtonPos: 'top-right'
			}
		}
	}
};

export default config;
