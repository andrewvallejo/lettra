<script lang="ts">
	import Editor from '$components/Editor.svelte';
	import Table from '$components/Table.svelte';
</script>

<svelte:head>
	<title>Lettra</title>
</svelte:head>

<div class="wrapper">
	<main class="layout">
		<Table />
		<Editor />
	</main>
</div>

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
	.wrapper {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
	}

	.layout {
		display: flex;
		justify-content: center;
		width: 100%;
		height: 100%;
		overflow: hidden;
	}
</style>
