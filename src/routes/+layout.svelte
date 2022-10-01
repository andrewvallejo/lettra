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
		display: flex;
		position: relative;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		height: 2.75rem;
		padding-top: 0.3rem;
		border-bottom: 3px solid grey;

		&::before {
			content: '';
			z-index: -1;
			position: absolute;
			top: 0;
			width: 100%;
			height: 100%;
			background-color: #c4c4c4;
		}

		.title {
			display: flex;
			flex-direction: column;
			align-items: center;
			padding: 1rem;
			h1 {
				color: grey;
				font-weight: 300;
				font-size: 1.25rem;
				font-family: Courier New, monospace;
				text-transform: lowercase;
			}
		}
		.logo {
			width: 3rem;
			height: 2rem;
			padding-left: 1rem;
		}
	}
</style>
