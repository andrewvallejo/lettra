<script lang="ts">
	export let direction: string;
</script>

<section class="pane {direction}">
	<slot />
</section>

<style lang="scss">
	.pane {
		align-self: flex-end;
		width: 100%;
		height: calc(100% - 1.9rem);
		&.left,
		&.right {
			display: flex;
			justify-content: center;
			width: 40rem;
			height: 100%;
			padding-block-start: 3rem;
		}
	}
</style>
