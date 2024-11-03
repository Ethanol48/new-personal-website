<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import foundry from '$lib/assets/prog-icons/foundry-icon.png';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import PrIconMerged from './PRIconMerged.svelte';

	type PR = {
		repo: string;
		icon: string;
		desc: string;
		badges: string[];
	};

	let prs: PR[] = [
		{
			repo: 'https://github.com/foundry-rs/foundry-fork-db',
			icon: foundry,
			badges: ['Rust'],
			desc: 'Added the ability to mutate the state of the simulated EVM blockchain'
		}
	];

	// https://github.com/foundry-rs/foundry-fork-db
</script>

{#each prs as pr}
	<Card.Root class="relative mx-4 border-[#2d3139] bg-[#17191c]">
		<Card.Header class="flex flex-row items-center gap-3">
			<img
				class="mt-0 h-[40px] w-[40px] rounded-lg border-2 border-[#2d3139] p-1"
				src={pr.icon}
				alt=""
			/>
			<PrIconMerged />

			{#if pr.badges.length != 0}
				<div class="absolute right-4 top-3 flex gap-2">
					{#each pr.badges as badge}
						<Badge variant="default" class="z-50 text-lg">{badge}</Badge>
					{/each}
				</div>
			{/if}
		</Card.Header>
		<Card.Content>
			<a href={pr.repo}>
				<h3 class="w-fit text-2xl hover:underline">
					{pr.repo.split('https://github.com/')[1]}
				</h3>
			</a>
			<p class="text-lg">{pr.desc}</p>
		</Card.Content>
	</Card.Root>
{/each}
