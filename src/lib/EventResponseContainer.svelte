<script lang="ts">
	import UserInput from '$lib/Responses/UserInput.svelte';
	import handleImage from '$lib/Handlers/ImageHandler';
	import handleText from '$lib/Handlers/TextHandler';
	import handleHeatMap from '$lib/Handlers/HeatMapHandler';
	import handleTaxonomy from '$lib/Handlers/TaxonomyHandler';
	import handleVega from '$lib/Handlers/VegaHandler';
	import { createEventDispatcher } from 'svelte';
	import { handleTable } from './Handlers/Tablehandler';
	const dispatch = createEventDispatcher();

	let container: HTMLElement;
	export let URL: string;
	export let guid: string | null = null;

	export async function fetchResponse(inputtedText: string) {

		//repeat user input into a user input text box component
		const userInput = new UserInput({ target: container, props: { text: inputtedText } });
		window.scrollTo(0, document.body.scrollHeight);

		let request = `${URL}?question=${inputtedText}`
		if (guid !== null) {
			request += `&guid=${guid}`
		}
		const eventSource = new EventSource(request);

		//handleResponse(jsonResponse.response, inputtedText);
			
	}

	function handleResponse(jsonResponse: any, inputtedText: string) {
		
		
		if(jsonResponse.outputType === undefined || jsonResponse.outputType === null) {
			handleText(container, 'No Output Type specified');
		} else {
			console.log("Output type: ",jsonResponse.outputType);
			switch (jsonResponse.outputType) {
				case 'text':
					handleText(container, jsonResponse.responseText);
					break;
				case 'image':
					handleImage(container, jsonResponse);
					break;
				case 'histogram':
					console.log('histogram request');
				case 'heatmap':
					handleHeatMap(container, jsonResponse);
					break;
				case 'species':
					handleTaxonomy(container, jsonResponse);
					break;
				case 'species':
					handleTaxonomy(container, jsonResponse);
					break;
				case 'vegaLite':
					handleVega(container, jsonResponse);
					break;
				case 'table':
					handleTable(container, jsonResponse);
					break;
				default:
					console.error('[TREY] Error: Invalid output type');
					handleText(container, 'Error: Invalid output type');
					break;
			}
		}
		//scroll to bottom of the page
		window.scrollTo(0, document.body.scrollHeight);
		dispatch( 'responseReceived');
	}
</script>

<main bind:this={container} />

<style>
	main {
		min-height: 100dvh;
		display: flex;
		flex-flow: column;
		justify-content: flex-end;
		gap: 1rem;
		margin: 1rem auto;
		max-width: 900px;
		overflow: hidden;
		overscroll-behavior: contain;
	}
</style>
