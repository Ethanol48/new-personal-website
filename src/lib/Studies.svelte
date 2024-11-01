<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import * as Accordion from '$lib/components/ui/accordion/index.js';
	import StudiesItems from '$lib/StudiesItems.svelte';
  import book from "$lib/assets/book.svg";


             //<img class="size-10" src={book} alt="" aria-label="book icon">
</script>

<Accordion.Root class="w-full">
	<Accordion.Item value="studies">
		<div class="w-full">
			<Card.Root>
				<Card.Header>
					<Accordion.Trigger class="pb-7 pt-0">
            <div class="flex justify-start gap-4">
						  <h2 class="mb-[-10px]">Studies</h2>

              <svg viewBox="0 0 20 20" class="fill-[#fff] mt-[4px] w-[20px] h-[20px]" xmlns="http://www.w3.org/2000/svg"><path d="M6 4H5a1 1 0 1 1 0-2h11V1a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V5a1 1 0 0 0-1-1h-7v8l-2-2-2 2V4z"/>
              </svg>

            </div>
					</Accordion.Trigger>
				</Card.Header>

				<Accordion.Content>
					<StudiesItems />
				</Accordion.Content>
			</Card.Root>
		</div>
	</Accordion.Item>
</Accordion.Root>
