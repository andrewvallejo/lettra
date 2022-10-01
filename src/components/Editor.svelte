<script lang="ts">
	import { space } from '$lib/words';
	import { parsedText, text } from '$stores/text';
	import Word from './Word.svelte';

	let value: string = '';

	$: text.set(value);

	$: console.log($parsedText);
</script>

<div class="editor">
	<div class="container">
		{#if value}
			<p class="live-text">
				{#each $parsedText as word}
					{#key word.string}
						<Word {word} />
						{#if word.string !== '<br>'}
							{@html space}
						{/if}
					{/key}
				{/each}
			</p>
		{/if}
		<label for="editor">Editor</label>
		<textarea id="editor" name="editor" class="text-input" bind:value />
	</div>
</div>

<style lang="scss">
	.editor {
		position: absolute;
		top: 0.75rem;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		display: flex;
		border: 20px solid #e5e5e5;
		border-radius: 7px;
		width: 30rem;
		height: clamp(30rem, 96.5%, 45rem);

		label[for='editor'] {
			font-size: 0;
		}
		.container {
			position: relative;
			width: 100%;
			height: 100%;
			.live-text {
				position: absolute;
				z-index: 1;
				top: 0.1rem;
				left: 0.1rem;
				pointer-events: none;
				width: 100%;
				height: 100%;

				overflow-wrap: break-word;
			}
			.text-input {
				position: absolute;
				outline: none;
				resize: none;
				border: 2.5px solid grey;
				width: 100%;
				height: inherit;
				padding: 0;
				word-spacing: 0.3rem;
				caret-color: black;
				color: transparent;
			}
		}
	}
</style>
