<script lang="ts">
	export let text: string = '';
</script>

<p class="live-text">{@html text}</p>

<style lang="scss">
	.live-text {
		position: absolute;
		z-index: 1;
		top: 0;
		pointer-events: none;
		width: 100%;
		height: inherit;
		word-wrap: break-word;
	}
</style>
