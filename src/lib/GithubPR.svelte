<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import foundry from '$lib/assets/prog-icons/foundry-icon.png';
	import repo from '$lib/assets/prog-icons/repo-icon.svg';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import PrIconMerged from '$lib/misc/PRIconMerged.svelte';

	type PR = {
		repo: string;
		icon: string;
		desc: string;
    type: string;
		badges: string[];
	};

	let prs: PR[] = [
		{
			repo: 'https://github.com/foundry-rs/foundry-fork-db',
			icon: foundry,
			badges: ['Rust'],
			desc: 'Added the ability to mutate state of a simulated EVM blockchain',
      type: 'contribuition',
		},
		{
			repo: 'https://github.com/Ethanol48/medium-api-library',
			icon: repo,
			badges: ['Golang', 'Docker'],
			desc: 'An unofficial medium API',
      type: 'repo',
		}
	];

	export let ZIndex: number;
	// https://github.com/foundry-rs/foundry-fork-db
</script>

<div id="github-contrib">
{#each prs as pr, i}
	<div class="px-4">
		<Card.Root class="relative border-[#2d3139] bg-[#17191c]" style="z-index: {ZIndex + i};">
			<Card.Header class="flex flex-row items-center gap-3">
				{#if pr.icon !== ''}
          {#if pr.type === 'repo'}
            <img
              class="mt-0 h-[40px] w-[40px] rounded-lg border-2 border-[#313C4A] p-2"
              src={pr.icon}
              alt=""
            />
          {:else}
            <img
              class="mt-0 h-[40px] w-[40px] rounded-lg border-2 border-[#313C4A] p-1"
              src={pr.icon}
              alt=""
            />
          {/if}
				{/if}

        {#if pr.type === 'contribuition'}
				  <PrIconMerged />
        {/if}

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
	</div>
{/each}
</div>

<style lang="scss">


  // TODO: refactor this css for each component 
  // one for PRs other for Images / websites
	

	@media (min-width: 768px) {
		#github-contrib {
			> div {
				transition: margin 0.7s ease-in-out;

				@for $i from 1 through 4 {
					$top-margin: if($i == 1, 0, (-100px * ($i - 1)));
					$side-margin: 10px - 5px * ($i - 1); // Decrementa 5px en cada iteración
					// $side-margin: 5px * ($i - 1); // Decrementa 5px en cada iteración

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
		#github-contrib {
			> div {
				transition: margin 0.7s ease-in-out;
				margin-top: 10px;
			}
		}
	}



	#github-contrib:hover {
    > div {
			  margin: 0;
			  margin-top: 10px;
    }
	}
</style>

