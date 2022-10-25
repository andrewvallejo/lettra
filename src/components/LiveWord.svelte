<script lang="ts">
	import {
		addBackSlashes,
		flipWord,
		rainbow,
		removeBackSlashes,
		reverseParseText
	} from '$lib/strings';
	import { cleanText, text as textStore } from '$stores/text';
	import type { Word } from '$types';
	import { interpolateLab } from 'd3-interpolate';
	import { tweened, type Tweened } from 'svelte/motion';

	export let word: Word;

	export let textArea: HTMLTextAreaElement;

	let { index, string, type } = word;

	let flippedWord: string = flipWord(string, type);

	let isSelected: boolean = false;

	let isTextMenuActive: boolean = false;

	let button: HTMLSpanElement;

	let htmlInput: HTMLInputElement;

	let value: string = string;

	let inputValue: string;

	let delay = index * 10 + 200;

	const color: Tweened<string> = tweened(rainbow[7], {
		duration: 350,
		delay: delay,
		interpolate: interpolateLab
	});

	const debounce = (callback: () => void) => {
		setTimeout(() => {
			if (!isSelected) {
				callback();
			}
		}, 250);
	};

	const handleClick = () => {
		if (type === 'wordiableCopy') return;

		let splitted: string[] = $cleanText;
		let newText: string;
		let flippedWord: string =
			type === 'wordiable' ? removeBackSlashes(word.string) : addBackSlashes(word.string);

		textArea.focus();
		splitted[index] = flippedWord;
		newText = reverseParseText(splitted.join(' '));
		textStore.set(newText);
	};

	const handleDoubleClick = () => {
		if (type === 'wordiableCopy') return;

		isSelected = true;
		isTextMenuActive = true;
		htmlInput && selectText();

		setTimeout(() => {
			if (isSelected) {
				isSelected = false;
			}
		}, 250);
	};

	const handleFocus = () => {
		setTimeout(() => {
			button.focus();
		}, 0);
	};

	const selectText = () => {
		let start = $cleanText.indexOf(string);
		let end = start + string.length;

		textArea.focus();
		textArea.setSelectionRange(start + 1, end - 1);
		htmlInput.setSelectionRange(start + 1, end - 1);
	};

	// Create a store that stores the correct form of Text String
	// TODO: fix double click
	// TODO remove click from wordiableCopy
	// TODO: when hitting enter; the cursor should be at the end of the sentence
	// TODO: When you click on a word while isTextMenuActive is true, it should enter the word via handleInpt

	const handleInput = (event: any) => {
		if (event.key === 'Enter') {
			event.preventDefault();
			let splitted: string[] = $cleanText;
			splitted[index] = inputValue;
			textStore.set(reverseParseText(splitted.join(' ')));
			isTextMenuActive = false;
			isSelected = false;
			textArea.setSelectionRange($textStore.length, $textStore.length);
		} else if (event.key === 'Escape') {
			event.preventDefault();
			isTextMenuActive = false;
			isSelected = false;
			textArea.setSelectionRange($textStore.length, $textStore.length);
		}
	};

	$: color.set(word.color);
	$: type === 'word' ? (inputValue = addBackSlashes(value)) : (inputValue = value);
	$: value = removeBackSlashes(string);
	$: inputValue = addBackSlashes(value);
</script>

<span>
	{#if isTextMenuActive}
		<input
			bind:this={htmlInput}
			bind:value
			type="text"
			on:keydown={handleInput}
			style="width: {value.length}ch;"
		/>
	{:else}
		<button
			on:dblclick={handleDoubleClick}
			on:click={() => debounce(handleClick)}
			style="color: {$color}"
			class={word.type}
			bind:this={button}
			on:focus={handleFocus}
		>
			{#if word.isWordiable}
				<div style="color: {$color};">
					<p class="back-slash">\</p>
					{removeBackSlashes(string)}
					<p class="back-slash">\</p>
				</div>
			{:else}
				{string}
			{/if}
		</button>
	{/if}
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
			opacity: 0.15;
			font-weight: 200;
		}
		button {
			position: relative;
			border-bottom: transparent 0px solid;
			cursor: pointer;

			&:focus {
				font-weight: 700;
				transition: all 250ms ease-in-out;
			}
			&:active {
				transition: all 250ms ease-in-out;
				font-weight: 700;
			}
			div {
				display: flex;
			}
		}

		input {
			top: 0;
			border: none;
			background-image: none;
			background-color: transparent;
			box-shadow: none;
			cursor: pointer;
		}
	}
</style>
