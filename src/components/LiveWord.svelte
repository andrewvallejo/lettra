<script lang="ts">
	import { addBackSlashes, rainbow, removeBackSlashes, reverseParseText } from '$lib/strings';
	import { cleanText, text as textStore } from '$stores/text';
	import type { Word } from '$types';
	import { interpolateLab } from 'd3-interpolate';
	import { tweened, type Tweened } from 'svelte/motion';

	export let word: Word;

	let type: string = word.type;

	let text: string = word.string;

	let index = word.index;

	let delay = index * 45;

	let color: Tweened<string> = tweened(rainbow[7], {
		duration: 350,
		delay: delay,
		interpolate: interpolateLab
	});

	const handleClick = () => {
		if (type === 'wordiableCopy') return;
		let newText: string;
		let splitted: string[] = $cleanText;
		let flippedWord: string =
			type === 'wordiable' ? removeBackSlashes(word.string) : addBackSlashes(word.string);

		splitted[index] = flippedWord;
		newText = splitted.join(' ');
		textStore.set(reverseParseText(newText));
	};

	$: color.set(word.color);
</script>

<span>
	<button on:click={handleClick} style="color: {$color};" class={word.type}>
		{#if word.isWordiable}
			<div style="display:flex; color: {$color};">
				<span class="back-slash">\</span>
				{removeBackSlashes(text)}
				<span class="back-slash">\</span>
			</div>
		{:else}
			{text}
		{/if}
	</button>
</span>

<style lang="scss">
	span {
		pointer-events: auto;
		line-height: 1.12;
		.word {
			font-weight: 400;
		}
		.wordiable {
			font-weight: 600;
		}
		.wordiableCopy {
			font-weight: 400;
			cursor: text;
		}
		.back-slash {
			opacity: 0.1;
			font-weight: 200;
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
