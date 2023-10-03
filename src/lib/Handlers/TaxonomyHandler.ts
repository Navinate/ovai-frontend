import Taxonomy from '$lib/Responses/Taxonomy.svelte';
import type { apiResponse } from '$lib/types/responseType';
export default function handleTaxonomy(target: HTMLElement, jsonResponse: apiResponse): Taxonomy {
	
	//@ts-ignore
	let taxonomy = jsonResponse.species[0].taxonomy.ancestors;

	return new Taxonomy({ target: target, props: { data: taxonomy, responseText: jsonResponse.responseText } });
}

/*
export interface taxonomyTree {
	level: taxonomyLevel;
	name: string;
	children?: taxonomyTree[];
}
*/