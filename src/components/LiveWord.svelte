<script lang="ts">
	import { rainbow } from '$lib/editor';
	import type { Word } from '$types';
	import { interpolateLab } from 'd3-interpolate';
	import { tweened, type Tweened } from 'svelte/motion';

	export let word: Word;

	let text: string = word.string;

	let color: Tweened<string> = tweened(rainbow[7], {
		duration: 350,
		delay: 250,
		interpolate: interpolateLab
	});

	const handleClick = () => {
		console.log('button works');
	};

	$: font = word.isWordiable ? 'wordiable' : 'word';
	$: color.set(rainbow[word.wordiablePos]);
</script>

<span>
	<button on:click={handleClick} style="color: {$color}" class={font}>
		{text}
	</button>
</span>

<style lang="scss">
	span {
		pointer-events: auto;
		.wordiable {
			font-weight: 600;
		}
		button {
			position: relative;
			border-bottom: transparent 1px solid;
			cursor: pointer;

			&:focus {
				border-bottom: black 1px solid;
				transition: all 1s;
			}
			&:active {
				border-bottom: black 2px solid;
				transition: all 1s;
				transform: scale(1.05);
			}
		}
	}
</style>
