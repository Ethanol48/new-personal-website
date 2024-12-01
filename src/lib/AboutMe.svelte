<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import ProgIcon from '$lib/misc/ProgIcon.svelte';

	import pythonIcon from '$lib/assets/prog-icons/python-icon.svg';
	import javascriptIcon from '$lib/assets/prog-icons/javascript-icon.svg';
	import svelteIcon from '$lib/assets/prog-icons/svelte-icon.svg';
	import rustIcon from '$lib/assets/prog-icons/rust-icon.svg';
	import golangIcon from '$lib/assets/prog-icons/go-icon.svg';
	import solidityIcon from '$lib/assets/prog-icons/solidity-icon.svg';
	import typescriptIcon from '$lib/assets/prog-icons/typescript-icon.svg';

	import FlagOfSpain from '$lib/misc/FlagOfSpain.svelte';
	import FlagOfFrance from '$lib/misc/FlagOfFrance.svelte';

	type Tool = {
		name: string;
		icon: string;
	};


	import dockerIcon from '$lib/assets/prog-icons/docker-icon.svg';
	import cSharpIcon from '$lib/assets/prog-icons/C-sharp-icon.svg';
	import nextjsIcon from '$lib/assets/prog-icons/nextjs-icon.svg';
	import reactIcon from '$lib/assets/prog-icons/react-icon.svg';
	import arrow from '$lib/assets/arrow.svg';

	let toolsIHaveUsed: Tool[] = [
		{
			name: 'NextJs',
			icon: nextjsIcon
		},
		{
			name: 'React',
			icon: reactIcon
		},
		{
			name: 'Rust',
			icon: rustIcon
		},
		{
			name: 'Docker',
			icon: dockerIcon
		},

		{
			name: 'C#',
			icon: cSharpIcon
		}
	];

	let toolsImConfortable: Tool[] = [
		{
			name: 'Golang',
			icon: golangIcon
		},
		{
			name: 'Solidity',
			icon: solidityIcon
		},
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
			name: 'Python',
			icon: pythonIcon
		}
	];

	import { fade } from 'svelte/transition';
	import OnMount from './OnMount.svelte';
	import { cn } from './utils';

	export let delay = 0;
	export let duration = 0;

	let className = '';
	export { className as class };

	function handleMouseEnter(elem: any) {
		elem = elem.target;

		let banderas = elem.querySelectorAll('.container-bandera');

		for (let i = 0; i < banderas.length; i++) {
			const flag = banderas[i];
			flag.classList.add('animated');

			flag.addEventListener('animationend', (f: any) => {
				f.target.classList.remove('animated');
			});
		}
	}
</script>

<OnMount>
	<!-- svelte-ignore a11y-missing-attribute -->
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-aria-attributes -->
	<!-- svelte-ignore a11y-aria-activedescendant-has-tabindex -->
	<!-- svelte-ignore a11y-incorrect-aria-attribute-type -->
	<!-- svelte-ignore a11y-misplaced-role -->
	<!-- svelte-ignore a11y-no-redundant-roles -->
	<!-- svelte-ignore a11y-no-interactive-element-to-noninteractive-role -->
	<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
	<!-- svelte-ignore a11y-no-noninteractive-element-to-interactive-role -->
	<!-- svelte-ignore a11y-role-supports-aria-props -->
	<!-- svelte-ignore a11y-unknown-role -->
	<!-- svelte-ignore a11y-role-has-required-aria-props -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div
		id="about"
		class={cn('about relative flex w-full flex-col justify-start', className)}
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
					<h2 class="mt-0" style="font-size: 160%;">About me</h2>
				</div>
			</Card.Header>

			<Card.Content class="flex flex-col gap-2 px-7 pt-3">
        <div class="hand-written -rotate-6 flex flex-col absolute bottom-7 right-12 invisible md:visible w-24">
            <div class="relative flex">
              <div class="absolute bottom-0 left-[-35px] w-fit">
                <p>Hover over </p>
                <p  style="margin: 0px; padding: 0px;">the icons !!</p>
              </div>
              <img src={arrow} class="size-8 absolute bottom-[-5] left-[-65px]" style="transform: scale(1, 1) rotate(165deg);" alt="">
          </div>
        </div>

				<div class="flex w-full flex-col gap-2">
					<div class="mb-3 flex flex-col gap-3">
						<p class="text-lg" style="margin-top: 0px;">
							I'm a 21 year old Software developer, I'm from the Canary Islands and I'm a
							Franco-Spanish citizen
						</p>
					</div>

					<h4 class="mt-5 mb-3">Tools that I'm confortable with:</h4>
					<div id="prog-icons" class="flex flex-wrap gap-3">
						{#each toolsImConfortable as tool}
							{#if tool.name == 'Rust'}
								<ProgIcon class={'p-[-2]'} image={tool.icon} alt={tool.name} />
							{:else}
								<ProgIcon image={tool.icon} alt={tool.name} />
							{/if}
						{/each}
					</div>
					<h4 class="mt-5 mb-3">Other tools that I have used:</h4>
					<div id="prog-icons" class="flex flex-wrap gap-3">
						{#each toolsIHaveUsed as tool}
							{#if tool.name == 'Rust'}
								<ProgIcon class={'p-[-2]'} image={tool.icon} alt={tool.name} />
							{:else}
								<ProgIcon image={tool.icon} alt={tool.name} />
							{/if}
						{/each}
					</div>
				</div>
			</Card.Content>
		</Card.Root>

		<div id="banderas" class="absolute right-2 top-[-25px] flex" style="z-index: -2;">
			<FlagOfFrance />
			<FlagOfSpain />
		</div>
	</div>
</OnMount>

<style lang="scss">

  @-moz-document url-prefix() {
    /* Estilos específicos para Firefox */
    #banderas {
      margin-top: 5px;
      /* Otros estilos específicos */
    }
  }


	#prog-icons:hover {
		:global(.prog:hover) {
			scale: 1.05;
			transition: scale background-color 0.2s ease-in-out;
		}

		// :global(.prog:not(hover)) {
		//   scale: 0.95;
		//   transition: scale background-color 0.2s ease-in-out;
		// }

		:global(.prog) {
			// transition: scale 0.5s ease-in-out;
			transition-duration: 0.5s;
		}
	}

	:global(.animated) {
		animation: moveRightLeft 2s;
		@apply transition-all;
	}

	@keyframes moveRightLeft {
		from {
			transform: translateX(0) rotate(0deg); /* Comienza en su posición original */
		}

		20% {
			transform: translateX(-7px) rotate(-5deg); /* Mueve a la derecha */
		}

		30% {
			transform: translateX(7px) rotate(+5deg); /* Mueve a la izquierda */
		}

		50% {
			transform: translateX(-7px) rotate(-5deg); /* Mueve a la derecha */
		}

		70% {
			transform: translateX(7px) rotate(+5deg); /* Mueve a la izquierda */
		}

		80% {
			transform: translateX(7px) rotate(+5deg); /* Mueve a la izquierda */
		}

		to {
			transform: translateX(0px) rotate(0deg); /* Comienza en su posición original */
		}
	}
</style>
