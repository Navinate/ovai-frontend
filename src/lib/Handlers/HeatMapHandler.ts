import HeatMap from '$lib/Responses/HeatMap.svelte';

export default function handleHeatMap(target: HTMLElement, res: any): HeatMap {
	return new HeatMap({ target: target, props: {} });
}
