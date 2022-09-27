<script lang="ts">
	import { space } from '$lib/editor/words';
	import type { WordI } from '$types';
	import { fade } from 'svelte/transition';

	export let word: WordI;

	let color: string = word.color;
	let text: string = word.string;
	let wordiable: boolean = word.isWordiable;
</script>

<span class:wordiable style:color transition:fade>
	{text}
</span>

<style lang="scss">
	.wordiable {
		position: relative;
		z-index: 1;
	}
</style>
