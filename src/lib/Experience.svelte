<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import daimo from '$lib/assets/Daimo.webp';
	import brick from '$lib/assets/brick.png';
	import ExperienceImage from '$lib/ExperienceImage.svelte';
	import { type Project } from '$lib';

	let projects: Project[] = [
		{
			name: 'Daimo',
			date: 'July 2024',
			desc: `Implementation of i18n and translation to Spanish to Daimo's <a class="link" href="https://daimo.com">website</a> and <a class="link" href="https://apps.apple.com/us/app/daimo/id6459700343">mobile app</a>`,
			photo: daimo,
			badges: ['React', 'Typescript']
		}
	];

	/*
        <div class="ml-7 mt-5 flex items-center justify-start gap-4">
          <p class="m-0 p-0 text-2xl text-sky-200">{project.date}</p>
          <p class="text-bold p-0" style="margin: 0px;">-</p>
          <h3 class="m-0 p-0">{project.name}</h3>
        </div>
  */
</script>

<div class="flex w-full flex-col justify-start">
	<Card.Root class="pt-0">
		<Card.Header>
			<div class="flex flex-row items-center gap-4">
				<h2 class="mb-[-10px] mt-0">Past Work</h2>
				<img src={brick} class="right-2 top-2 size-9" alt="" />
			</div>
		</Card.Header>

		<div class="w-full">
			<Card.Content class="px-1 pt-2">

			  <p class="pl-5">A sample of projects and open-sourced contributions that I've worked in the past, showing what tools I used.</p>
				<ExperienceImage {projects} />
			</Card.Content>
		</div>
	</Card.Root>
</div>
