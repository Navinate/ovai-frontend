<script lang="ts">
    import { createEventDispatcher } from "svelte";


    const dispatch = createEventDispatcher();

    function insertPrompt(event: any) {
        dispatch("submit", event.target.innerText);
    }
    let prompts = [
        "Find me images of Aurelia aurita",
        "Find me images of moon jelly sorted by depth",
        "Find me best images of moon jelly",
        "Find me images of creatures with tentacles in Monterey bay and depth less than 5k meters",
        "Find me images of starfish in Monterey bay and depth less than 5k meters",
        "Find me best images of ray-finned creatures in Monterey bay and depth less than 5k meters",
        "What are the ancestors of moon jelly",
        "Show me the taxonomy of Aurelia aurita",
        "What color are moon jellyfsh",
        "How large are moon jellyfish",
        "Display a bar chart illustrating the distribution of all species in Monterey Bay, categorized by ocean zones",
        "Display a bar chart showing the temperature ranges for Aurelia Aurita and Pycnopodia helianthoides colored coded for each species from 0°C to 20 in 5°C increments.",
        "What is the total number of Patiria miniata found in the database?",
        "Generate a heatmap of species in Monterey Bay",
        "Generate me a scatterplot showing the correlating the oxygen and pressure level in Monetery bay",
        "Display a pie chart that correlates salinity levels with the distribution of Bathochordaeus stygius categorizing salinity levels from 30 to 38 with each level of width 1",
        "Generate an area chart showing the year the images were taken",
        "Group bar chart showing the pressure level for Bathochordaeus stygius and Aurelia Aurita categorized in <2, 2 to 10, 10 to 100, 100 to 1000, >1000 pressure levels",
        "Find me any 3 species of starfish and get me their image count in the database",
    ]
</script>
<main>
    <h2>Try Asking:</h2>
    <hr>
    <sub>Click on a prompt to insert it into the input box</sub>
    <br>
    <br>
    <ul>
        {#each prompts as prompt}
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
            <li on:click={insertPrompt}>{prompt}</li>
        {/each}
    </ul>
</main>

<style>
    main {
        /*position this element to the top left corner of the page when scrolling down*/
        position: fixed;
        top: 5rem;
        left: 0;
        z-index: 1000;
        width: 25rem;
        height: 70%;
        background-color: rgba(0, 0, 0, 0.2);
        margin: 1rem;
        border-radius: 1rem;
        padding: 0.5rem;
        overflow-y: scroll;
        color: white;
    }
    h2 {
        font-size: 1.5rem;
        font-weight: 400;
        color: white;
    }
    ul {
        list-style: none;
    }
    li {
        font-size: 1rem;
        font-weight: 300;
        padding: 0 0 1.2rem 0;
        color: white;
        transition-duration: 0.1s;
        cursor: pointer;
    }

    li:hover {
        color: var(--highlight);
        transform: scale(1.05);
        transform: translate(0.5rem, 0);
    }

    ::-webkit-scrollbar-track {
	    border-radius: 0rem 1rem 1rem 0rem; /* Rounded corners */
    }

</style>