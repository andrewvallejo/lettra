<script lang="ts">
	import { checkForWordiables } from '$lib/wordiables';
	import { parsedText, text, wordiables } from '$stores/text';
	import { space } from '$lib/words';
	import Word from './Word.svelte';
	import { instructions } from '$stores/instructions';

	let value: string = '';

	let instructionsActive = true;

	let textArea: HTMLTextAreaElement;

	const clearEditor = () => (value = '');

	const handleKeyDown = (event: KeyboardEvent): void => {
		instructionsActive && event.preventDefault();
		if (instructionsActive && value.length >= $instructions.length) {
			instructionsActive = false;
			clearEditor();
		}
	};

	const spliceInstructions = () => {
		if (!instructionsActive) return;
		const interval = setInterval(() => {
			if ($instructions.length > value.length) {
				value += $instructions[value.length];
			} else {
				clearInterval(interval);
			}
		}, 25);
	};

	$: checkForWordiables(value);
	$: !value && instructionsActive && spliceInstructions();
	$: !value && wordiables.set([]);
	$: text.set(value);
	$: !instructionsActive && textArea && textArea.focus();
</script>

<svelte:window on:keydown={handleKeyDown} />
<div class="editor" class:inactive={instructionsActive}>
	<div class="container">
		{#if value}
			<p class="live-text">
				{#each $parsedText as word}
					{#key word.string}
						{#if word.string === '<br>'}
							<br />
						{:else}
							<Word {word} />
						{/if}
						{#if word.string !== '<br>'}
							{space}
						{/if}
					{/key}
				{/each}
			</p>
		{/if}
		<label for="editor">Editor</label>
		<textarea id="editor" name="editor" class="text-input" bind:value bind:this={textArea} />
	</div>
</div>

<style lang="scss">
	@media (max-width: 800px) {
		.editor {
			height: 100%;
		}
	}
	.editor {
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 65rem;
		min-width: 25rem;
		height: clamp(13rem, 94%, 50rem);
		border: 20px solid #e5e5e5;
		border-radius: 7px;

		&.inactive {
			&::before {
				content: '';
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				z-index: 2;
				cursor: text;
			}
		}
		label[for='editor'] {
			font-size: 0;
		}
		.container {
			position: relative;
			width: 100%;
			height: 100%;

			.live-text {
				z-index: 1;
				position: absolute;
				top: 0.1rem;
				left: 0.1rem;
				width: 100%;
				height: 100%;
				word-spacing: -0.39rem;
				pointer-events: none;
				overflow-wrap: break-word;
			}

			.text-input {
				position: absolute;
				width: 100%;
				height: inherit;
				padding: 0;
				border: 2.5px solid grey;
				outline: none;
				color: transparent;
				resize: none;
				background: eggshell;
				caret-color: black;
			}
		}
	}
</style>
