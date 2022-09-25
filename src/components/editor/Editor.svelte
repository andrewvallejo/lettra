<script lang="ts">
	import { parsedText, text } from '$stores/text';
	import LiveText from '$text/LiveText.svelte';

	let value = '';

	$: text.set(value);
</script>

<div class="editor">
	<div class="container">
		{#key value}
			{#if value}
				<LiveText text={$parsedText} />
			{/if}
		{/key}
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
				height: inherit;
				width: 100%;
				padding: 0;
				color: transparent;
				caret-color: black;
			}
		}
	}
</style>
