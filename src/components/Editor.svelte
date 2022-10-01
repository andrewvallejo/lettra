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
						{#if word.string === '<br>'}
							<br />
						{:else}
							<Word {word} />
						{/if}
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
		display: flex;
		position: absolute;
		top: 0.75rem;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 30rem;
		height: clamp(30rem, 96.5%, 45rem);
		border: 20px solid #e5e5e5;
		border-radius: 7px;

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
				word-spacing: 0.3rem;
				resize: none;
				caret-color: black;
			}
		}
	}
</style>
