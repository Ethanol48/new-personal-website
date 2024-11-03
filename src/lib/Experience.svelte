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
  export let delay = 0;
  export let duration = 0;
</script>

<OnMount>
  <div
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
            A sample of projects and open-sourced contributions that I've worked in the past, showing
            what tools I used.
          </p>
          <GithubPR />
          <ExperienceImages />
        </Card.Content>
      </div>
    </Card.Root>

    <div 
      class="flex items-center gap-2 py-10 justify-center w-full"
    >
      <p>Made with</p>
      <i class="fa-solid fa-heart text-[#bf2222]"></i>
      <p style="margin: 0px;">using</p>
      <img src={svelte} class="size-6" alt="svelte" />
      <p style="margin: 0px;">and</p>
      <img src={shadcn} class="size-6 rounded" alt="svelte-shadcn" />
    </div>
  </div>
</OnMount>
