<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from '$lib/utils.js';

	type $$Props = HTMLAttributes<HTMLDivElement>;

	let className: $$Props['class'] = undefined;
	export { className as class };
</script>

<i
	class={cn(
		'fa-solid fa-code-merge w-fit rounded-lg border-2 border-[#313C4A] p-3 text-2xl text-[#815CE1]',
		className
	)}
	style="margin-top: 0px;"
>
</i>
