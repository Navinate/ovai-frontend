<script lang="ts">
	import { onMount } from 'svelte';
	import vegaEmbed, { type VisualizationSpec } from 'vega-embed';
	import type { Spec } from 'vega';

	export let spec: VisualizationSpec | Spec;

	let visual: HTMLDivElement;

	onMount(() => {
		vegaEmbed(visual, spec);
		window.scrollTo(0, document.body.scrollHeight);
	});
</script>

<main>
	<div bind:this={visual} />
</main>

<style>
	main {
		width: 100%;
		border-radius: 0.5rem;
		padding: 0.5rem;
		background-color: var(--background-light);
		min-height: 5rem;
		color: white;
		display: grid;
		place-items: center start;
	}
</style>
