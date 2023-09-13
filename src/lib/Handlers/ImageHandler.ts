import Image from "$lib/Responses/Image.svelte"

export default  function handleImage(target: HTMLElement): Image {
    return new Image({ target: target, props: { src: 'https://picsum.photos/300/200' } });
}