import { writable } from 'svelte/store';
import type { WordI } from '$types';

type Editor = {
	parsedText: WordI[];
	wordiables: WordI[];
};

const store: Editor = {
	parsedText: [],
	wordiables: []
};

const editorStore = () => {
	const { subscribe, set, update } = writable(store);

	return {
		subscribe,
		set,
		update,
		setParsedText: (parsedText: WordI[]) => update((editor) => ({ ...editor, parsedText })),
		setWordiables: (wordiables: WordI[]) => update((editor) => ({ ...editor, wordiables }))
	};
};

export const editor = editorStore();