<script lang="ts">
	import { addMatchedWords } from '../lib/editor';
	import { parsedText, text } from '../store/text';
	import LiveText from './text/LiveText.svelte';

	/**
	 * @param string
	 * @description user text input (invisible)
	 */
	let value: string = '';

	$: text.set(value);
	$: addMatchedWords(value);
</script>

<div class="editor">
	<div class="container">
		{#if value}
			<LiveText text={$parsedText} />
		{/if}
		<label for="editor">Editor</label>
		<textarea id="editor" name="editor" class="text-input" bind:value />
	</div>
</div>

<style lang="scss">
	.editor {
		flex-direction: column;
		align-items: center;
		justify-content: center;
		display: flex;
		width: 100%;
		height: 100%;
		label[for='editor'] {
			font-size: 0;
		}
		.container {
			position: relative;
			width: 60%;
			height: inherit;
			.text-input {
				position: absolute;
				top: 0;
				outline: none;
				resize: none;
				border: 1px solid lightgray;
				padding: 0;
				height: inherit;
				width: 100%;
				// color: transparent;
				caret-color: black;
			}
		}
	}
</style>
