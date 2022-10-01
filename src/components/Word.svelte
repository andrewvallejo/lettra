<script lang="ts">
	import type { WordI } from '$types';
	import { fade } from 'svelte/transition';
	import { tweened, type Tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	import { rainbow } from '$lib/wordiables';
	import { interpolateLab } from 'd3-interpolate';

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
	// @keyframes blackToColor {
	// 	0% {
	// 		color: black;
	// 	}
	// 	100% {
	// 		color: var(--color);
	// 	}
	// }

	// .color {
	// 	color: black;

	// 	&.red {
	// 		color: red;
	// 		animation: blackToColor 0.2s ease-in-out;
	// 	}
	// 	&.orange {
	// 		color: orange;

	// 		animation: blackToColor 0.2s ease-in-out;
	// 	}
	// 	&.yellow {
	// 		color: yellow;
	// 		animation: blackToColor 0.2s ease-in-out;
	// 	}
	// 	&.green {
	// 		color: green;
	// 		animation: blackToColor 0.2s ease-in-out;
	// 	}
	// 	&.blue {
	// 		color: blue;
	// 		animation: blackToColor 0.2s ease-in-out;
	// 	}
	// 	&.purple {
	// 		color: purple;
	// 		animation: blackToColor 0.2s ease-in-out;
	// 	}
	// 	&.indigo {
	// 		color: indigo;
	// 		animation: blackToColor 0.2s ease-in-out;
	// 	}
	// 	&.black {
	// 		color: black;
	// 		animation: blackToColor 0.2s ease-in-out;
	// 	}
	// }
</style>
