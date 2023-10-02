import HeatMap from '$lib/Responses/HeatMap.svelte';
import type { apiResponse } from '$lib/types/responseType';

export default function handleHeatMap(target: HTMLElement, jsonResponse: apiResponse): HeatMap {
	if(jsonResponse.species === undefined) throw new Error("No species data found");

	let positionData: number[] = [];
	for(let i = 0; i < jsonResponse.species.length; i++) {
		//@ts-ignore
		positionData.push({
			x: jsonResponse.species[i].latitude,
			y: jsonResponse.species[i].longitude,
		});
	}

	return new HeatMap({ target: target, props: {
		responseText: jsonResponse.responseText,
		//speciesData: jsonResponse.species,
		positionData: positionData,
		mapWidth: 500,
		mapHeight: 500,
		mapZoom: 10,
	} });
}
