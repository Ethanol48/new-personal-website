<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import brick from '$lib/assets/brick.png';
	import arrow from '$lib/assets/arrow.svg';
	import ExperienceImages from '$lib/ExperienceImages.svelte';
	import GithubPR from '$lib/GithubPR.svelte';

	/*
        <div class="ml-7 mt-5 flex items-center justify-start gap-4">
          <p class="m-0 p-0 text-2xl text-sky-200">{project.date}</p>
          <p class="text-bold p-0" style="margin: 0px;">-</p>
          <h3 class="m-0 p-0">{project.name}</h3>
        </div>
  */

  import { Button } from "$lib/components/ui/button/index.js";
  import * as Popover from "$lib/components/ui/popover/index.js";

	import { fade } from 'svelte/transition';
	import OnMount from './OnMount.svelte';
	import { cn } from './utils';
	import { Content } from './components/ui/accordion';

	let { delay = 0, duration = 0, class: className = '' } = $props();
	let ZIndex: number = $state(0);
</script>

<OnMount>
	<div
		id="experience-card"
		class={cn('flex w-full flex-col justify-start relative', className)}
		in:fade={{
			duration: duration,
			delay: delay
		}}
	>
		<Card.Root class="pt-0">
			<Card.Header>
				<div class="flex flex-row items-center gap-4">
					<h2 class="mb-2 mt-0" style="font-size: 160%;">Past Work</h2>
					<img src={brick} class="mt-[-10px] size-8 md:size-9" alt="" />
				</div>
			</Card.Header>

			<div class="w-full">
				<Card.Content class="px-1 pt-2">

          <Popover.Root>
            <Popover.Trigger asChild let:builder>
              <Button builders={[builder]} variant="outline" class="dark absolute top-8 right-10">
                Legend 
              </Button>

            </Popover.Trigger>
            <Popover.Content class="dark"> 
              <div>
                Hola!!
              </div>
            </Popover.Content>
          </Popover.Root>

        <div class="hand-written -rotate-6 flex flex-col absolute top-[40px] right-[-80px] invisible md:visible w-24">
          <div class="relative flex">
            <div class="absolute bottom-6 left-[-3px] w-fit">
              <p>Click to</p>
              <p  style="margin: 0px; padding: 0px;">learn more !!</p>
            </div>
            <img src={arrow} class="size-8 absolute bottom-10 left-[-35px]" style="transform: scale(-1, 1) rotate(-15deg);" alt="">
          </div>
        </div>

        


					<p class="mb-5 px-5" style="margin-top: 0px;">
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
