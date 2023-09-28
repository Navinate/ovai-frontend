<script lang="ts">
	import UserInput from '$lib/Responses/UserInput.svelte';
	import handleImage from '$lib/Handlers/ImageHandler';
	import handleText from '$lib/Handlers/TextHandler';
	import handleHeatMap from '$lib/Handlers/HeatMapHandler';
	import handleTaxonomy from '$lib/Handlers/TaxonomyHandler';
	import handleChart from '$lib/Handlers/ChartHandler';
	import handleVega from '$lib/Handlers/VegaHandler';
	import type { apiResponse } from './types/responseType';

	let container: HTMLElement;
	export let URL: string;
	export let guid: string | null = null;

	export async function fetchResponse(inputtedText: string) {
		//make query to backend

		/* let params = new URLSearchParams();
		params.append('question', inputtedText);
		if (guid !== null) {
			params.append('guid', guid);
		}
		try {
			let res = await fetch(URL, {
				method: guid !== null ? 'PUT' : 'POST',
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				},
				body: params
			});

			if (res.ok) {
				const jsonResponse = await res.json();
				guid = jsonResponse.guid;
				handleResponse(jsonResponse, inputtedText);
			} else {
				console.error('Error:', res.statusText);
				alert(res.statusText);
			}
			//@ts-ignore
		} catch (error) {
			console.error('Fetch Error:', error);
		} */

		let dummyData: apiResponse = {
			outputType: inputtedText,
			textResponse: 'This is a test response',
			species: [],
			table: []
		};
		handleResponse(dummyData, inputtedText);
	}

	function handleResponse(jsonResponse: any, inputtedText: string) {
		//repeat user input into a user input text box component
		const userInput = new UserInput({ target: container, props: { text: inputtedText } });

		switch (jsonResponse.outputType) {
			case 'text':
				handleText(container, jsonResponse.textResponse);
				break;
			case 'image':
				handleImage(container, jsonResponse);
				break;
			case 'histogram':
				console.log('histogram request');
			case 'heatmap':
				handleHeatMap(container, jsonResponse);
				break;
			case 'taxonomy':
				handleTaxonomy(container, jsonResponse);
				break;
			case 'chart':
				handleChart(container);
				break;
			case 'vega':
				handleVega(container);
				break;
			default:
				console.error('Error: Invalid output type');
				handleText(container, 'Error: Invalid output type');
				break;
		}
		//scroll to bottom of the page
		window.scrollTo(0, document.body.scrollHeight);
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
