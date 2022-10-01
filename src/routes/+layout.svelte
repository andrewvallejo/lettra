<script lang="ts">
</script>

<header>
	<img class="logo" src={`favicon.png`} alt="Lettra's Logo" />
	<div class="title">
		<h1>Lettra</h1>
	</div>
</header>
<slot />

<style lang="scss">
	header {
		position: relative;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		display: flex;
		width: 100%;
		border-bottom: 3px solid grey;

		&::before {
			content: '';
			position: absolute;
			width: 100%;
			height: 100%;
			top: 0;
			background-color: #c4c4c4;
			z-index: -1;
		}

		.title {
			flex-direction: column;
			align-items: center;
			display: flex;
			padding-inline: 1rem;
		}
		.logo {
			width: 3rem;
			height: 2rem;
			padding-left: 1rem;
		}
	}
</style>
