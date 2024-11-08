<script>
	import * as Tooltip from '$lib/components/ui/tooltip';
	import { cn } from '$lib/utils';
	let { image = '', alt = '', class: className = '' } = $props();

	// 'fa-solid fa-code-merge w-fit rounded-lg border-2 border-[#313C4A] p-3 text-2xl text-[#815CE1]',
</script>

<Tooltip.Root>
	<Tooltip.Trigger>
		<div
			class={cn(
				'prog flex max-md:size-12 md:size-14 items-center justify-center overflow-hidden rounded border-[1px] border-[#212C3A] bg-gray-800 p-1  text-2xl transition ease-in-out hover:border-gray-600 hover:bg-gray-700',
				className
			)}
		>
			<img class="h-full" src={image} {alt} />
		</div>
	</Tooltip.Trigger>
	<Tooltip.Content>
		<p class="text-lg font-bold">{alt}</p>
	</Tooltip.Content>
</Tooltip.Root>
