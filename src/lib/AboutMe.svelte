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

  import FlagOfSpain from '$lib/misc/FlagOfSpain.svelte'
  import FlagOfFrance from '$lib/misc/FlagOfFrance.svelte'

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
		class="relative flex w-full flex-col justify-start about"
    style="z-index: 2;"
		in:fade={{
			duration: duration,
			delay: delay
		}}
	>
		<Card.Root class="pt-0">
			<Card.Header>
				<div class="flex flex-row items-center gap-4">
					<h2 class="mt-0">About me</h2>
				</div>
			</Card.Header>

			<Card.Content class="flex flex-col gap-2 px-7 pt-3">
				<div class="w-full">
          <p>Cositas</p>
				</div>
			</Card.Content>
		</Card.Root>
  
    <FlagOfFrance />
    <FlagOfSpain />
	</div>
</OnMount>

<style>

  .about :global(.container-bandera) {
    /*scale: 2;*/
  }
  .about:hover :global(.container-bandera) {
    scale: 1.2;
  }
</style>

