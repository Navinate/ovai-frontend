<script lang="ts">
	import Prompt from '$lib/Prompt.svelte';
	import ResponseContainer from '$lib/ResponseContainer.svelte';

	const URL = 'http://localhost:5000/';

	let container: ResponseContainer;

	function handleResponse(event: any) {
		console.log('response received', event.detail);
		container.fetchResponse(event.detail);
	}
</script>

<main>
	<ResponseContainer {URL} bind:this={container} />
	<Prompt on:submit={handleResponse} />
</main>

<style>
	main {
		width: 99vw;
		height: 100dvh;
		overscroll-behavior: none;
	}
</style>
