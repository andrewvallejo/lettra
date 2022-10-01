<script lang="ts">
	import { rainbow } from '$lib/wordiables';
	import type { WordI } from '$types';
	import { interpolateLab } from 'd3-interpolate';
	import { tweened } from 'svelte/motion';

	export let word: WordI;

	let color = tweened(rainbow[7], {
		duration: 500,
		interpolate: interpolateLab
	});

	$: color.set(rainbow[word.wordiablePos]);
	$: text = word.string;
</script>

{#key word.string}
	<span style="color: {$color}">
		{@html text}
	</span>
{/key}

<style lang="scss">
</style>
