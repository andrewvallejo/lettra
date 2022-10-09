<script lang="ts">
	import { addBackSlashes, rainbow, removeBackSlashes, splitText } from '$lib/strings';
	import type { Word } from '$types';
	import { interpolateLab } from 'd3-interpolate';
	import { tweened, type Tweened } from 'svelte/motion';
	import { text as textStore } from '$stores/text';

	export let word: Word;

	let wordType: string = word.type;

	let text: string = word.string;

	let index = word.index;

	let color: Tweened<string> = tweened(rainbow[7], {
		duration: 350,
		delay: 250,
		interpolate: interpolateLab
	});

	const handleClick = () => {
		let flippedWord: string;
		let splitted: string[] = splitText($textStore);
		if (wordType === 'wordiable') {
			flippedWord = removeBackSlashes(word.string);
		} else {
			flippedWord = addBackSlashes(word.string);
		}
		splitted[index] = flippedWord;
		const newText = splitted.join(' ');
		textStore.set(newText);
	};

	$: color.set(rainbow[word.wordiablePos]);
</script>

<span>
	<button on:click={handleClick} style="color: {$color}" class={word.type}>
		{text}
	</button>
</span>

<style lang="scss">
	span {
		pointer-events: auto;
		line-height: 1.12;
		z-index: 5;
		.wordiable {
			font-weight: 600;
		}
		button {
			position: relative;
			border-bottom: transparent 0px solid;
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
