<script lang="ts">
	import { space } from '$lib/strings';
	import { instructions } from '$stores/instructions';
	import { parsedText, text } from '$stores/text';
	import { words } from '$stores/words';
	import LiveWord from './LiveWord.svelte';

	let textArea: HTMLTextAreaElement;

	const typeInstructions = () => {
		const interval = setInterval(() => {
			if ($instructions.script.length > $text.length) {
				$text += $instructions.script[$text.length];
			} else {
				clearInterval(interval);
			}
		}, 3); //TODO change back to 35
	};

	const handleKeyDown = (event: KeyboardEvent): void => {
		$instructions.active && event.preventDefault();
		if ($instructions.active && $text.length >= $instructions.script.length) {
			instructions.toggle();
			text.set('');
		}
	};

	$: if (!$text && $instructions.active) typeInstructions();
	$: if (!$instructions.active && textArea) textArea.focus();
	$: $text ? words.setWords($parsedText) : words.clear();
	$: words.setWords($parsedText);
</script>

<svelte:window on:keydown={handleKeyDown} />

<div class="editor" class:inactive={$instructions.active}>
	<div class="container">
		{#if $text}
			<p class="live-text">
				{#each $words as word}
					{#key word.string}
						{#if word.string === '<br>'}
							<br />
						{:else}
							<LiveWord {word} {textArea} />
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
		width: 66rem;
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
				top: 0;
				left: 0.1rem;
				width: 100%;
				height: 100%;
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
