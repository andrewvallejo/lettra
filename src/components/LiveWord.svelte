<script lang="ts">
	import { addBackSlashes, rainbow, removeBackSlashes, reverseParseText } from '$lib/strings';
	import { cleanText, text as textStore } from '$stores/text';
	import type { Word } from '$types';
	import { interpolateLab } from 'd3-interpolate';
	import { tweened, type Tweened } from 'svelte/motion';

	export let word: Word;

	let active = false;

	let wordType: string = word.type;

	let text: string = word.string;

	let index = word.index;

	let color: Tweened<string> = tweened(rainbow[7], {
		duration: 350,
		delay: 250,
		interpolate: interpolateLab
	});

	const debounce = (callback: () => void) => {
		setTimeout(() => {
			if (!active) {
				callback();
			}
		}, 250);
	};

	const handleClick = () => {
		let newText: string;
		let splitted: string[] = $cleanText;
		let flippedWord: string =
			wordType === 'wordiable' ? removeBackSlashes(word.string) : addBackSlashes(word.string);
		splitted[index] = flippedWord;
		newText = reverseParseText(splitted.join(' '));
		textStore.set(newText);
	};

	const handleDoubleClick = () => {
		active = true;
		setTimeout(() => {
			if (active) {
				active = false;
			}
		}, 250);
	};

	$: color.set(rainbow[word.wordiablePos]);
</script>

<span>
	<button
		on:dblclick={handleDoubleClick}
		on:click={() => debounce(handleClick)}
		style="color: {$color}"
		class={word.type}
	>
		{text}
	</button>
</span>

<style lang="scss">
	span {
		pointer-events: auto;
		line-height: 1.12;
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
