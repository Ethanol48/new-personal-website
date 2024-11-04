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
	import { onMount } from 'svelte';

	export let delay = 0;
	export let duration = 0;

  function handleMouseEnter(elem: any) {

    elem = elem.target;
    
    let banderas = elem.querySelectorAll(".container-bandera");
    console.log("mouse enter")

    for (let i = 0; i < banderas.length; i++) {
      const flag = banderas[i];
      flag.classList.add("animated");

      flag.addEventListener("animationend", (f: any) => {
        f.target.classList.remove("animated");
      })
    }

  }

</script>

<OnMount>
	<div
    id="about"
		class="relative flex w-full flex-col justify-start about"
    style="z-index: 2;"
		in:fade={{
			duration: duration,
			delay: delay
		}}
    on:mouseenter={handleMouseEnter}

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
  
    <div 
      class="absolute right-2 top-[-20px] flex "
      style="z-index: -2;"
    >
      <FlagOfFrance />
      <FlagOfSpain />
    </div>

	</div>
</OnMount>

<style>

  :global(.animated) {
    animation: moveRightLeft 2s;
    @apply transition-all

  }

  @keyframes moveRightLeft {

     from {
         transform: translateX(0) rotate(0deg); /* Comienza en su posición original */
     }

     30% {
         transform: translateX(-10px) rotate(-5deg); /* Mueve a la derecha */
     }

     40% {
         transform: translateX(10px) rotate(+5deg); /* Mueve a la izquierda */
     }

     50% {
         transform: translateX(-10px) rotate(-5deg); /* Mueve a la derecha */
     }

     60% {
         transform: translateX(10px) rotate(+5deg); /* Mueve a la izquierda */
     }

     70% {
         transform: translateX(10px) rotate(+5deg); /* Mueve a la izquierda */
     }
    
     to {
         transform: translateX(0px) rotate(0deg); /* Comienza en su posición original */
     }

  }



</style>

