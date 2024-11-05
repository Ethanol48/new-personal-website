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

	import svelte from '$lib/assets/prog-icons/svelte-icon.svg';
	import shadcn from '$lib/assets/shadcn.png';
	import { fade } from 'svelte/transition';
	import OnMount from './OnMount.svelte';
	import { onMount } from 'svelte';
	

  let { delay = 0, duration = 0 } = $props();
  let ZIndex: number = $state(0);

  let fold = $state(false);
  
  function handleOnHover() {
    fold = true;
  }

	import { tick } from 'svelte';

	//$effect.pre(() => {
	//	tick().then(() => {
	//
	//       let experienceCard = document.getElementById("experience-card");
	//
	//       let container = document.querySelector("#experiences"); 
	//       experienceCard?.addEventListener("mouseenter", () => { 
	//         console.log("mouse enter: experience")
	//         unFoldNodes(divs.children);
	//       })
	//
	//       let divs = container;
	//
	//       if (divs?.children.length !== 3) {
	//         console.log("aun no ha cargado")
	//       } else {
	//
	//         // arange cards
	//         //changeNodes(divs.children)
	//       }
	//	});
	//});
	//
	// function getNumberFromPixels(elem: string): number {
	//   console.log("debug width: ", elem);
	//   return parseInt(elem.split("px")[0]);
	// }
	//
	// function unFoldNodes(elems: HTMLElement[]) {
	//   for (let i = 0; i < elems.length; i++) {
	//     const elem = elems[i];
	//
	//     //elem.style.setProperty("margin-top", `0px`);
	//     console.log(elem.classList);
	//   }
	// }
	//
	//
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

  

</script>


<OnMount>
	<div
    id="experience-card"
		class="flex w-full flex-col justify-start"
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
					<p class="mb-5 pl-5">
						A sample of projects and open-sourced contributions that I've worked in the past,
						showing what tools I used.
					</p>
          <div id="experiences">
            <GithubPR {ZIndex} />
            <ExperienceImages ZIndex={ZIndex + 20} />
          </div>
				</Card.Content>
			</div>
		</Card.Root>

		<div class="flex w-full items-center justify-center gap-2 py-10">
			<p>Made with</p>
			<i class="fa-solid fa-heart text-[#bf2222]"></i>
			<p style="margin: 0px;">using</p>
			<img src={svelte} class="size-6" alt="svelte" />
			<p style="margin: 0px;">and</p>
			<img src={shadcn} class="size-6 rounded" alt="svelte-shadcn" />
		</div>
	</div>
</OnMount>

<style lang="scss">
  #experience-card {
    &:hover {
      #experiences {
        > :global(div) {
          margin: 0;
          margin-top: 10px;
        }
      }
    }
  }

  @media (min-width: 768px) {
    #experiences {
      > :global(div) {
        transition: margin 0.7s ease-in-out;

        @for $i from 1 through 4 {
          $top-margin: if($i == 1, 0, (-100px * ($i - 1)) + if($i == 2, -10, -5)); // No margen top para el primer elemento
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
      > :global(div) {
        transition: margin 0.7s ease-in-out;
        margin-top: 10px;
      }
    }
  }
</style>
