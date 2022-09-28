<script lang="ts">
	import type { WordI } from '$types';
	import { fade } from 'svelte/transition';

	export let word: WordI;

	let color: string = word.color;
	let text: string = word.string;
	let wordiable: boolean = word.isWordiable;
</script>

<strong class:wordiable style:color>
	{@html text}
</strong>

<style lang="scss">
	.wordiable {
		position: relative;
		z-index: 1;
		font-weight: normal;
		text-shadow: 3px 3px 3px rgba(74, 66, 66, 0.2), 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.1);
	}
</style>
