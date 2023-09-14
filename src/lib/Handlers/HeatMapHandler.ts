import HeatMap from "$lib/Responses/HeatMap.svelte";

export default function handleHeatMap(target: HTMLElement): HeatMap {
    return new HeatMap({ target: target, props: {} });
}