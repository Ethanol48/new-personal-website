<script lang="ts">
	import * as Card from '$lib/components/ui/card';

	import pythonIcon from '$lib/assets/prog-icons/python-icon.svg';
	import javascriptIcon from '$lib/assets/prog-icons/javascript-icon.svg';
	import linuxIcon from '$lib/assets/prog-icons/linux-icon.svg';
	import svelteIcon from '$lib/assets/prog-icons/svelte-icon.svg';
	import rustIcon from '$lib/assets/prog-icons/rust-icon.svg';
	import golangIcon from '$lib/assets/prog-icons/go-icon.svg';
	import solidityIcon from '$lib/assets/prog-icons/solidity-icon.svg';
	import typescriptIcon from '$lib/assets/prog-icons/typescript-icon.svg';
	import toolsEmoji from '$lib/assets/tools.png';

	/*
        <div class="ml-7 mt-5 flex items-center justify-start gap-4">
          <p class="m-0 p-0 text-2xl text-sky-200">{project.date}</p>
          <p class="text-bold p-0" style="margin: 0px;">-</p>
          <h3 class="m-0 p-0">{project.name}</h3>
        </div>
  */

	type Tool = {
		name: string;
		icon: string;
	};

	let tools: Tool[] = [
		//{
		//	name: 'Python',
		//	icon: pythonIcon
		//},
		//{
		//	name: 'Linux',
		//	icon: linuxIcon
		//},
		//{
		//	name: 'Rust',
		//	icon: rustIcon
		//},
		//{
		//	name: 'Solidity',
		//	icon: solidityIcon
		//},
		{
			name: 'Javascript',
			icon: javascriptIcon
		},
		{
			name: 'Typescript',
			icon: typescriptIcon
		},
		{
			name: 'Svelte',
			icon: svelteIcon
		},
		{
			name: 'Golang',
			icon: golangIcon
		}
	];

	import { fade } from 'svelte/transition';
	import OnMount from './OnMount.svelte';
	export let delay = 0;
	export let duration = 0;
</script>

<OnMount>
	<div
		class="relative flex w-full flex-col justify-start"
		in:fade={{
			duration: duration,
			delay: delay
		}}
	>
		<Card.Root class="pt-0">
			<Card.Header>
				<div class="flex flex-row items-center gap-4">
					<h2 class="mt-0">Tools I use</h2>
					<img src={toolsEmoji} class="w-[25px]" alt="" />
				</div>
			</Card.Header>

			<Card.Content class="flex flex-col gap-2 px-7 pt-3">
				<div class="w-full">
					<div class="flex gap-3">
						{#each tools as tool}
							<img src={tool.icon} class="mt-2 h-[30px]" alt={tool.name} />
						{/each}
					</div>
				</div>
			</Card.Content>
		</Card.Root>
	</div>
</OnMount>
