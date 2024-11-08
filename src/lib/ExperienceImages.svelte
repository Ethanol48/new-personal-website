<script lang="ts">
	import notFound from '$lib/assets/404-image.svg';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import daimoLogo from '$lib/assets/daimo-logo.png';
	import daimo from '$lib/assets/Daimo.webp';
	import PrIconMerged from '$lib/misc/PRIconMerged.svelte';

	type Project = {
		name: string;
		date: string;
		desc: string;
		photo: any;
		icon: string;
		badges: string[];
	};

	let projects: Project[] = [
		{
			name: 'Daimo',
			date: 'July 2024',
			desc: `Implementation of i18n and translation to Spanish to Daimo's <a class="link" href="https://daimo.com">website</a> and <a class="link" href="https://apps.apple.com/us/app/daimo/id6459700343">mobile app</a>`,
			photo: daimo,
			icon: daimoLogo,
			badges: ['React', 'Typescript']
		},
		//{
		//	name: 'Daimo',
		//	date: 'July 2024',
		//	desc: `Implementation of i18n and translation to Spanish to Daimo's <a class="link" href="https://daimo.com">website</a> and <a class="link" href="https://apps.apple.com/us/app/daimo/id6459700343">mobile app</a>`,
		//	photo: daimo,
		//	icon: daimoLogo,
		//	badges: ['React', 'Typescript']
		//}
	];

	import { cn } from './utils';

	// function changeNodes(elems: HTMLElement[]) {
	//   for (let i = 0; i < elems.length; i++) {
	//     const elem = elems[i];
	//
	//     elem.style.marginLeft = `${(5 * (elems.length - i))}px`;
	//     elem.style.marginRight = `${(5 * (elems.length - i))}px`;
	//
	//     if (i == 1) {
	//       elem.style.setProperty("margin-top", `${(-100 * i) - 15}px`);
	//     } else {
	//       elem.style.setProperty("margin-top", `${(-100 * i)}px`);
	//     }
	//   }
	// }

	export let ZIndex: number;
</script>

<div id="experiences">
{#each projects as project, i}
	<div class={cn(`wrapper p-4 py-1`, '')} style="max-height: 380px; z-index: {ZIndex + i};">
		<div class="relative overflow-hidden rounded-xl border-[1px] border-[#2d3139] bg-[#17191c]">
			<div class="overlay relative w-full">
				{#if project.photo === ''}
					<img src={notFound} class="z-0 mx-auto overflow-hidden rounded-xl" alt="not-found" />
				{:else}
					<img
						src={project.photo}
						class="fondo z-0 mx-auto overflow-hidden rounded-xl"
						alt={project.name + ' photo'}
					/>

					<div class="fondo-hostia-ya absolute left-0 top-0 h-full w-full"></div>
				{/if}
			</div>

			<div class="absolute left-6 top-6 z-[100] flex gap-3">
				<img
					class="z-[100] h-[40px] w-[40px] rounded-lg border-2 border-[#313C4A]"
					src={project.icon}
					alt=""
				/>
				<PrIconMerged class="bg-[#1D2730]" />
			</div>

			{#if project.badges.length != 0}
				<div class="absolute right-5 top-5 flex gap-2">
					{#each project.badges as badge}
						<Badge variant="default" class="text-lg" style="/* z-index: {ZIndex + i} */"
							>{badge}</Badge
						>
					{/each}
				</div>
			{/if}

			<div class="absolute bottom-5 left-4 p-2" style="/* z-index: {ZIndex + i} */">
				<h3 class="text-3xl">{project.name}</h3>
				<p class="m-0" style="font-size: 15px;">
					{@html project.desc}
				</p>
			</div>
		</div>
	</div>
{/each}
</div>

<style lang="scss">
	.overlay img {
		filter: blur(1px);
		transition: filter 0.25s ease;
	}

	.overlay:hover img {
		filter: unset;
	}

	.fondo-hostia-ya {
		background: linear-gradient(
			0deg,
			rgba(0, 0, 0, 0.7) 0%,
			rgba(150, 150, 150, 0.9) 80%,
			rgba(255, 255, 255, 0.1) 100%
		);
	}





	
	@media (min-width: 768px) {
		#experiences {
			> div {
				transition: margin 0.7s ease-in-out;
	
				@for $i from 1 through 4 {
					$top-margin: if($i == 1, 0, (-150px * ($i - 1)));
					// $side-margin: 5px * ($i - 1); // Decrementa 5px en cada iteración
					$side-margin: 10px - 5px * ($i - 1); // Decrementa 5px en cada iteración
	
					&:nth-child(#{$i}) {
						margin-top: $top-margin;
						margin-left: $side-margin;
						margin-right: $side-margin;
					}
				}
			}
		}
	}
	
	@media (max-width: 768px) {
		#experiences {
			> div {
				transition: margin 0.7s ease-in-out;
				margin-top: 10px;
			}
		}
	}


  #experiences:hover {
    > div {
      margin: 0;
      margin-top: 10px;
    }
  }
</style>
