<script lang="ts">
	import type { WordI } from '$types';
	import { fade } from 'svelte/transition';

	export let word: WordI;

	let color: string = word.color;

	$: text = word.string;
</script>

<span style:color in:fade>
	{@html text}
</span>

<style lang="scss">
</style>
