<script lang="ts">

	import { addBackSlashes, reverseParseText, rainbow, removeBackSlashes } from '$lib/strings';

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
		let newText: string;
		let splitted: string[] = $cleanText;
		let flippedWord: string =
			wordType === 'wordiable' ? removeBackSlashes(word.string) : addBackSlashes(word.string);

		splitted[index] = flippedWord;
		newText = splitted.join(' ');
		textStore.set(reverseParseText(newText));
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
