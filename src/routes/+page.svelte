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
		overflow: hidden;
		margin: 0;
		padding: 0;
		font-size: 1.5rem;
		font-family: Roboto, sans-serif;
		color: black;
	}

	.wrapper {
		flex-direction: column;
		align-items: center;
		justify-content: space-around;
		display: flex;
	}

	.layout {
		justify-content: center;
		display: flex;
		overflow: hidden;
		width: 100%;
		height: 100%;
	}
</style>
