<script lang="ts">
	import { rainbow } from '$lib/wordiables';
	import type { WordI } from '$types';
	import { interpolateLab } from 'd3-interpolate';
	import { tweened, type Tweened } from 'svelte/motion';

	export let word: WordI;

	let text: string = word.string;

	let color: Tweened<string> = tweened(rainbow[7], {
		duration: 350,
		delay: 250,
		interpolate: interpolateLab
	});

	const handleClick = () => {
		console.log('button works');
	};

	$: color.set(rainbow[word.wordiablePos]);
</script>

<span>
	<button on:click={handleClick} style="color: {$color}">
		{text}
	</button>
</span>

<style lang="scss">
	span {
		pointer-events: auto;
		button {
			cursor: pointer;
			position: relative;
			border-bottom: transparent 1px solid;
			&:focus {
				transition: all 1s;
				border-bottom: black 1px solid;
			}
			&:active {
				transition: all 1s;
				border-bottom: black 2px solid;
				transform: scale(1.05);
			}
		}
	}
</style>
