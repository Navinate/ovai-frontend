<script lang='ts'>
    export let taxonomy: {
		ancestors: {
			name: string;
			rank: string;	
		}[]
		descendents: {
			name: string;
			parent: string;
			rank: string;
		}[]
	} | undefined;

    let ancestors = taxonomy!.ancestors;
    let descendents = taxonomy!.descendents;
</script>

<main>
    {#if taxonomy !== undefined}
        {#each ancestors as a}
            <li>{a.name} : {a.rank}</li>
        {/each}
        {#each descendents as d}
            <li>{d.name} : {d.rank}</li>
        {/each}
    {/if}
</main>