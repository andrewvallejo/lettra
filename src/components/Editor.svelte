<script lang="ts">
	import { objectifyWords, powerWordiables, space } from '$lib/editor';
	import { instructions } from '$stores/instructions';
	import { cleanText, text } from '$stores/text';
	import { wordiableDraft, words } from '$stores/words';
	import LiveWord from './LiveWord.svelte';

	let textArea: HTMLTextAreaElement;

	const clearEditor = () => text.set('');

	const typeInstructions = () => {
		const interval = setInterval(() => {
			if ($instructions.prompt.length > $text.length) {
				$text += $instructions.prompt[$text.length];
			} else {
				clearInterval(interval);
			}
		}, 15);
	};

	const startApp = () => {
		if (!$text && $instructions.instructionActive) {
			typeInstructions();
		}
	};

	const handleKeyDown = (event: KeyboardEvent): void => {
		$instructions.instructionActive && event.preventDefault();
		if ($instructions.instructionActive && $text.length >= $instructions.prompt.length) {
			instructions.toggleInstructions();
			clearEditor();
		}
	};
	$: console.log($instructions);

	const parseText = () => {
		if ($cleanText) {
			const upgradedWords = objectifyWords($cleanText, $wordiableDraft);
			powerWordiables(upgradedWords, $wordiableDraft);
			words.setParsedText(upgradedWords);
		}
	};

	$: console.log($instructions);
	$: $instructions.instructionActive && startApp();
	$: !$instructions.instructionActive && textArea && textArea.focus();
	$: $text && parseText();
</script>

<svelte:window on:keydown={handleKeyDown} />

<div class="editor" class:inactive={$instructions.instructionActive}>
	<div class="container">
		{#if $text}
			<p class="live-text">
				{#each $words.words as word}
					{#key word.string}
						{#if word.string === '<br>'}
							<br />
						{:else}
							<LiveWord {word} />
						{/if}
						{#if word.string !== '<br>'}
							{space}
						{/if}
					{/key}
				{/each}
			</p>
		{/if}
		<label for="editor">Editor</label>
		<textarea
			id="editor"
			name="editor"
			class="text-input"
			bind:value={$text}
			bind:this={textArea}
		/>
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
