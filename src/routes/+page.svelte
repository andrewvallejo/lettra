<script lang="ts">
	import Editor from '$components/Editor.svelte';
	import Pane from '$components/Pane.svelte';
	import Table from '$components/Table.svelte';
</script>

<svelte:head>
	<title>Lettra</title>
</svelte:head>

<main class="layout">
	<Pane direction="left">
		<Table />
	</Pane>
	<Editor />
	<Pane direction="right" />
</main>

<style lang="scss">
	.layout {
		display: flex;
		position: absolute;
		top: 0.75rem;
		justify-content: center;
		width: 100%;
		height: 100%;
		overflow: hidden;
	}
</style>
