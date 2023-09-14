import type { taxonomyTree } from "$lib/types/taxonomyTypes.d.ts"
import { taxonomyLevel } from "$lib/Helpers/enums"
import Taxonomy from "$lib/Responses/Taxonomy.svelte";
export default  function handleTaxonomy(target: HTMLElement, content: string): Taxonomy {

    let dummyData: taxonomyTree ={
        name: content,
        level: taxonomyLevel.kingdom,
    }
    let dummyArray = [dummyData,];
    return new Taxonomy({ target: target, props: { data: dummyArray } });
}