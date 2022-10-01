<script lang="ts">
	import { wordiables, text } from '$stores/text';
	import { rainbow } from '$lib/wordiables';
	import { fade } from 'svelte/transition';
</script>

<div>
	{#each $wordiables as wordiable, i}
		<p style="color: {rainbow[i]}" transition:fade>{wordiable}</p>
	{/each}
</div>
