<script lang="ts">
	import Editor from '$components/Editor.svelte';
	import Table from '$components/Table.svelte';
</script>

<svelte:head>
	<title>Lettra</title>
</svelte:head>

<main class="layout">
	<section class="pane left">
		<Table />
	</section>

	<Editor />

	<section class="pane right" />
</main>

<style lang="scss">
	:global(*) {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		overflow: hidden;
		color: black;
		font-size: 1.5rem;
		font-family: Roboto, sans-serif;
	}
	:global(button) {
		background: none;
		border: none;
	}

	.layout {
		position: absolute;
		top: 0.75rem;
		display: flex;
		justify-content: center;
		width: 100%;
		height: 100%;
		overflow: hidden;
		.pane {
			align-self: flex-end;
			width: 100%;
			height: calc(100% - 1.25rem);
			border: 1px solid red;
		}
	}
</style>
