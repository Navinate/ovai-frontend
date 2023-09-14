<script lang="ts">
	import type { taxonomyTree } from '$lib/types/taxonomyTypes';

	export let data: taxonomyTree[];
</script>

<main>
	{#each data as tree}
		{#if tree.children}
			<details>
				<summary>{tree.name}</summary>
				<ul>
					{#each tree.children as child}
						<li>{child.name}</li>
					{/each}
				</ul>
			</details>
		{:else}
			<p>{tree.name}</p>
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
