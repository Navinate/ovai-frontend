import type { taxonomyTree } from '$lib/types/taxonomyTypes.d.ts';
import { taxonomyLevel } from '$lib/Helpers/enums';
import Taxonomy from '$lib/Responses/Taxonomy.svelte';
export default function handleTaxonomy(target: HTMLElement, content: string): Taxonomy {
	let childData4: taxonomyTree = {
		name: content + "'s child4",
		level: taxonomyLevel.order
	};

	let childData3: taxonomyTree = {
		name: content + "'s child3",
		level: taxonomyLevel.order
	};

	let childData2: taxonomyTree = {
		name: content + "'s child2",
		level: taxonomyLevel.class,
		children: [childData3, childData4]
	};
	let childData1: taxonomyTree = {
		name: content + "'s child1",
		level: taxonomyLevel.phylum,
		children: [childData2]
	};

	let dummyData: taxonomyTree = {
		name: content,
		level: taxonomyLevel.kingdom,
		children: [childData1]
	};
	let dummyArray = [dummyData];
	return new Taxonomy({ target: target, props: { data: dummyArray, isRoot: true } });
}
