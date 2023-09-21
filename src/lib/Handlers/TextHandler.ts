import Text from '$lib/Responses/Text.svelte';

export default function handleImage(target: HTMLElement, content: string): Text {
	return new Text({ target: target, props: { text: content } });
}
