import { writable } from 'svelte/store';

function editor() {
	const { subscribe, set, update } = writable('');

	return {
		subscribe,
		set,
		update
	};
}

export default editor;
