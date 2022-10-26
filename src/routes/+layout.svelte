<script lang="ts">
	import '../app.postcss';
</script>

<header>
	<img class="logo" src={`favicon.png`} alt="Lettra&apos;s Logo" />
	<div class="title">
		<h1>Lettra</h1>
	</div>
</header>

<slot />

<footer>
	<p>
		Lettra is a project by <a href="https://linkedin.com/in/andrewvallejo">Andrew Vallejo</a>
		and can be found on <a href="https://github.com/andrewvallejo/lettra">GitHub</a>.
	</p>
</footer>

<style lang="scss">
	@media (max-width: 500px) {
		header {
			background: hsl(0deg 0% 90%);
		}
	}
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
		.logo {
			width: 3rem;
			height: 2rem;
			padding-left: 1rem;
		}
		.title {
			display: flex;
			flex-direction: column;
			align-items: center;
			padding: 1rem;
			h1 {
				color: grey;
				font-weight: 500;
				font-size: 1.25rem;
				font-family: Courier New, monospace;
				text-transform: lowercase;
			}
		}
	}

	footer {
		display: flex;
		position: absolute;
		bottom: 0;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: clamp(1rem, 4%, 2.25rem);
		transition: 1s all;
		p {
			color: lightgrey;
			font-size: clamp(0.5rem, 2vw, 0.75rem);
			transition: 1s all;
			a {
				color: grey;
				font-size: clamp(0.5rem, 2vw, 1rem);
				text-decoration: none;
				transition: all 1s 250ms;
				&:hover {
					text-decoration: underline;
					transition: 1s all ease;
				}
				@media (max-height: 610px) {
					z-index: -1;
					color: transparent;
					transition: all 250ms;
				}
			}
			@media (max-height: 610px) {
				z-index: -1;
				color: transparent;
				transition: all 250ms;
			}
		}
	}
</style>
