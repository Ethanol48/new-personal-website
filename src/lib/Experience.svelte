<script lang="ts">
	import * as Accordion from '$lib/components/ui/accordion/index.js';
	import * as Card from '$lib/components/ui/card';
	import daimo from '$lib/assets/Daimo.webp';
	import ExperienceImage from '$lib/ExperienceImage.svelte';
	import { type Project } from '$lib';

	let projects: Project[] = [
		{
			name: 'Daimo',
			date: 'July 2024',
			desc: `Implementation of i18n and translation to Spanish to Daimo's <a class="link" href="https://daimo.com">website</a> and <a class="link" href="https://apps.apple.com/us/app/daimo/id6459700343">mobile app</a>`,
			photo: daimo
			//photo: "",
		}
	];
</script>

<Accordion.Root class="w-full pt-0">
  <div class="flex w-full flex-col justify-start">

        <Accordion.Item value="item-Experience">
    <Card.Root class="pt-0">

      {#each projects as project, i}

        {#if i == 0}
          <Card.Header >
            <Accordion.Trigger class="pt-0 pb-7">
              <h2 class="mb-[-10px]">Experience</h2>
            </Accordion.Trigger>
          </Card.Header>
        {/if}

          <Accordion.Content>
          <div class="w-full">
            <div class="ml-7 mt-5 flex items-center justify-start gap-4">
              <p class="m-0 p-0 text-xl text-sky-200">{project.date}</p>
              <p class="text-bold p-0" style="margin: 0px;">-</p>
              <h3 class="m-0 p-0">{project.name}</h3>
            </div>

            <Card.Content class="px-0 pt-2">
              <ExperienceImage {project} />

              <!-- <img  src={project.photo} >  -->
            </Card.Content>
          </div>

          </Accordion.Content>





      {/each}
    </Card.Root>

        </Accordion.Item>
  </div>
</Accordion.Root>
