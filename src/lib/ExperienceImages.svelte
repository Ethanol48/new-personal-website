<script lang="ts">
	import notFound from '$lib/assets/404-image.svg';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import daimoLogo from '$lib/assets/daimo-logo.png';
	import daimo from '$lib/assets/Daimo.webp';
	import PrIconMerged from './PRIconMerged.svelte';

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
		}
	];
</script>

{#each projects as project}
	<div class=" mt-5 p-5 py-1" style="max-height: 380px;">
		<div class="overlay relative overflow-hidden rounded-xl">
			{#if project.photo === ''}
				<img
					src={notFound}
					class="z-0 mx-auto overflow-hidden rounded-xl p-[1px]"
					alt="not-found"
				/>
			{:else}
				<img
					src={project.photo}
					class="fondo z-0 mx-auto overflow-hidden rounded-xl p-[1px]"
					alt={project.name + ' photo'}
				/>
			{/if}

			<div class="absolute left-5 top-6 z-[100] flex gap-3">
				<img
					class="z-[100] h-[40px] w-[40px] rounded-lg border-2 border-[#313C4A]"
					src={project.icon}
					alt=""
				/>
				<PrIconMerged class="bg-[#1D2730]" />
			</div>

			{#if project.badges.length != 0}
				<div class="absolute right-3 top-3 flex gap-2">
					{#each project.badges as badge}
						<Badge variant="default" class="z-50 text-lg">{badge}</Badge>
					{/each}
				</div>
			{/if}

			<div class="absolute bottom-5 left-2 z-40 p-2">
				<h3 class="text-3xl">{project.name}</h3>
				<p class="m-0" style="font-size: 15px;">
					{@html project.desc}
				</p>
			</div>
		</div>
	</div>
{/each}

<style>
	.overlay img.fondo {
		filter: blur(1px);
		transition: transform 0.25s ease;
		transition: filter 0.25s ease;
	}

	.overlay:hover img.fondo {
		filter: unset;
		transform: scale(1.001);
	}

	.overlay::before {
		content: '';
		z-index: 10;
		width: 100%;
		height: 100%;
		display: block;
		position: absolute;

		background: rgb(0, 0, 0);
		background: linear-gradient(
			0deg,
			rgba(0, 0, 0, 0.7) 0%,
			rgba(150, 150, 150, 0.9) 80%,
			rgba(255, 255, 255, 0.1) 100%
		);
	}
</style>
