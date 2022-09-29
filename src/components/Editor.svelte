<script lang="ts">
	import { parsedText, text } from '$stores/text';
	import Word from './Word.svelte';
	import Wordiable from './Wordiable.svelte';

	let value: string = '';

	$: text.set(value);
	$: console.log($parsedText);
</script>

<div class="editor">
	<div class="container">
		{#if value}
			<p class="live-text">
				{#each $parsedText as word}
					{#if word.isWordiable}
						{#key word.string && word.color}
							<Wordiable {word} />
						{/key}
					{:else}
						{#key word}
							<Word {word} />
						{/key}
					{/if}
				{/each}
			</p>
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
			.live-text {
				position: absolute;
				z-index: 1;
				top: 0;
				pointer-events: none;
				width: 100%;
				height: inherit;
				overflow-wrap: break-word;
			}
			.text-input {
				position: absolute;
				top: 0;
				outline: none;
				resize: none;
				border: 1px solid lightgray;
				height: inherit;
				width: 100%;
				padding: 0;
				color: transparent;
				caret-color: black;
			}
		}
	}
</style>
