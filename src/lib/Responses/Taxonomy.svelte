<script lang="ts">
	import type { taxonomyTree } from '$lib/types/taxonomyTypes';
	import { taxonomyLevel } from '$lib/Helpers/enums';

	export let data: taxonomyTree[];
	export let isRoot: boolean = false;
	console.log(data);
</script>

<main>
	{#if isRoot}
		<h3>Fathom said:</h3>
		<hr />
	{/if}
	{#each data as tree}
		<h2>{tree.name} : {taxonomyLevel[tree.level]}</h2>
		{#if tree.children}
			<svelte:self data={tree.children} />
		{/if}
	{/each}
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
