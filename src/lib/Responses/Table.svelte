<script lang="ts">
    export let table: string;
    export let responseText: string;
</script>

<main>
    <h3>Fathom Said:</h3>
    <br/>
    <p>{responseText}</p>
    <br/>
    <div class="table">
        {table}
    </div>
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