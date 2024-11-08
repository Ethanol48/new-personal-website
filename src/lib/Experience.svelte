<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import brick from '$lib/assets/brick.png';
	import ExperienceImages from '$lib/ExperienceImages.svelte';
	import GithubPR from '$lib/GithubPR.svelte';

	/*
        <div class="ml-7 mt-5 flex items-center justify-start gap-4">
          <p class="m-0 p-0 text-2xl text-sky-200">{project.date}</p>
          <p class="text-bold p-0" style="margin: 0px;">-</p>
          <h3 class="m-0 p-0">{project.name}</h3>
        </div>
  */

	import { fade } from 'svelte/transition';
	import OnMount from './OnMount.svelte';
	import { cn } from './utils';

	let { delay = 0, duration = 0, class: className = '' } = $props();
	let ZIndex: number = $state(0);
</script>

<OnMount>
	<div
		id="experience-card"
		class={cn('flex w-full flex-col justify-start', className)}
		in:fade={{
			duration: duration,
			delay: delay
		}}
	>
		<Card.Root class="pt-0">
			<Card.Header>
				<div class="flex flex-row items-center gap-4">
					<h2 class="mb-2 mt-0">Past Work</h2>
					<img src={brick} class="right-2 top-2 size-9" alt="" />
				</div>
			</Card.Header>

			<div class="w-full">
				<Card.Content class="px-1 pt-2">
					<p class="mb-5 px-5">
						A sample of projects and open-sourced contributions that I've worked in the past,
						showing what tools I used.
					</p>
					<div class="mx-auto flex max-md:w-full md:w-[380px] flex-col justify-center">
						<div id="exp-container" class="w-full flex flex-col gap-4 justify-center">
							<GithubPR {ZIndex} />
							<ExperienceImages ZIndex={ZIndex + 20} />
						</div>
					</div>
				</Card.Content>
			</div>
		</Card.Root>
	</div>
</OnMount>

<style lang="scss">


	// #experience-card {
	// 	&:hover {
	// 		#experiences {
	// 			> :global(div) {
	// 				margin: 0;
	// 				margin-top: 10px;
	// 			}
	// 		}
	// 	}
	// }
	//
	// @media (min-width: 768px) {
	// 	#experiences {
	// 		> :global(div) {
	// 			transition: margin 0.7s ease-in-out;
	//
	// 			@for $i from 1 through 4 {
	// 				$top-margin: if($i == 1, 0, (-100px * ($i - 1)) + if($i == 2, -10, +17));
	// 				$side-margin: 10px - 5px * ($i - 1); // Decrementa 5px en cada iteración
	//
	// 				&:nth-child(#{$i}) {
	// 					margin-top: $top-margin;
	// 					margin-left: $side-margin;
	// 					margin-right: $side-margin;
	// 				}
	// 			}
	// 		}
	// 	}
	// }
	//
	// @media (max-width: 768px) {
	// 	#experiences {
	// 		> :global(div) {
	// 			transition: margin 0.7s ease-in-out;
	// 			margin-top: 10px;
	// 		}
	// 	}
	// }
</style>
