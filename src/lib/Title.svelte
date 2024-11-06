<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import EmailToast from './EmailToast.svelte';
	import { toast } from 'svelte-sonner';
	import franceFlag from '$lib/assets/France-flag.png';
	import mapPing from '$lib/assets/map-ping.png';
	import OnMount from '$lib/OnMount.svelte';
	import { cn } from '$lib/utils.js';

	let className = '';
	export { className as class };

	function clickToCopy(node: any, text: string) {
		async function copyText() {
			try {
				await navigator.clipboard.writeText(text);

				node.dispatchEvent(
					new CustomEvent('copysuccess', {
						bubbles: true
					})
				);

				toast(EmailToast);
			} catch (error) {
				node.dispatchEvent(
					new CustomEvent('copyerror', {
						bubbles: true,
						detail: error
					})
				);

				toast(EmailToast, {
					componentProps: {
						error: true
					}
				});
			}
		}

		node.addEventListener('click', copyText);

		return {
			destroy() {
				node.removeEventListener('click', copyText);
			}
		};
	}

	import { fade } from 'svelte/transition';
	export let delay = 0;
	export let duration = 0;
</script>

<OnMount>
	<div
		class={cn('flex w-full flex-col gap-5', className)}
		style="z-index: 0;"
		in:fade={{
			duration: duration,
			delay: delay
		}}
	>
		<Card.Root>
			<Card.Content class="gap-1">
				<div class="flex justify-between">
					<div>
						<h1
							class="mt-10 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0"
						>
							Ethan Rouimi
						</h1>
						<div class="flex align-middle">
							<img src={mapPing} class="mt-[2px] h-[20px]" alt="" />
							<h2 class="m-0 p-0 text-xl font-normal text-[#aaaaaa]">Paris, France</h2>
							<img src={franceFlag} class="ml-2 mt-[2px] h-[20px]" alt="" />
						</div>
					</div>

					<div
						class="flex gap-3 text-3xl"
						aria-label="Email"
						use:clickToCopy={'contact@ethan-rouimi.com'}
					>
						<div
							class="flex h-fit w-fit cursor-pointer items-center justify-center rounded-lg border-2 p-2 transition ease-in-out hover:border-gray-600 hover:bg-gray-800"
						>
							<i class="fa-regular fa-envelope"></i>
						</div>

						<a class="size-fit" aria-label="Github Link" href="https://github.com/Ethanol48">
							<div
								class="flex h-fit w-fit items-center justify-center rounded-lg border-2 p-2 transition ease-in-out hover:border-gray-600 hover:bg-gray-800"
							>
								<i class="fa-brands fa-github"></i>
							</div>
						</a>

						<a
							class="size-fit"
							aria-label="Linkedin Link"
							href="https://linkedin.com/in/ethan-rouimi"
						>
							<div
								class="flex h-fit w-fit items-center justify-center rounded-lg border-2 p-2 transition ease-in-out hover:border-gray-600 hover:bg-gray-800"
							>
								<i class="fa-brands fa-linkedin linkedin"></i>
							</div>
						</a>
					</div>
				</div></Card.Content
			>

			<Card.Content class="mt-[-20px] gap-1 text-xl">
				<p>First year student in Computer Science Engineering at EPITA, Paris, France.</p>
			</Card.Content>
		</Card.Root>
	</div>
</OnMount>

<style>
	.linkedin {
		color: rgba(24, 152, 222, 0.7);
	}
</style>
