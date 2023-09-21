import { taxonomyLevel } from '$lib/Helpers/enums';

export interface taxonomyTree {
	level: taxonomyLevel;
	name: string;
	children?: taxonomyTree[];
}
