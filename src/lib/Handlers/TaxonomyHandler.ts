//import Taxonomy from '$lib/Responses/Taxonomy.svelte';
import Text from "$lib/Responses/Text.svelte"
import type { apiResponse, speciesData } from '$lib/types/responseType';
export default function handleTaxonomy(target: HTMLElement, jsonResponse: any): Text {

	/* return new Taxonomy({ target: target, props: { 
		speciesArray: jsonResponse.species as speciesData[],
		responseText: jsonResponse.responseText
		} }); */
		console.log("IN TAX HANDLER", jsonResponse);
	return new Text({
		target: target,
		props: {
			text: jsonResponse,
		}
	});
}
