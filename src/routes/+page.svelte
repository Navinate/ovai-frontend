<script lang="ts">
	import Prompt from '$lib/Prompt.svelte';
	import EventResponseContainer from '$lib/EventResponseContainer.svelte';

	const URL = 'http://128.46.81.243:8000/event-stream';
	

	let container: EventResponseContainer;
	let promptBox: Prompt;

	function handleResponse(event: any) {
		promptBox.toggleLoading();
		console.log('response received', event.detail);
		container.fetchResponse(event.detail);
	}

	function responseReceived() {
		promptBox.toggleLoading();
	}
</script>

<main>
	<EventResponseContainer {URL} bind:this={container} on:responseReceived={responseReceived} />
	<Prompt bind:this={promptBox} on:submit={handleResponse} />
</main>

<style>
	main {
		width: 99vw;
		height: 100dvh;
		overscroll-behavior: none;
	}
</style>
