<script>
  import Pin from "$lib/Pin.svelte";
  import * as Card from "$lib/components/ui/card";
  import { Button } from "$lib/components/ui/button";
</script>


<div class="flex flex-col w-full gap-5 mt-10">
  <Card.Root>
      <Card.Content class="gap-1">

      <div class="flex justify-between">
        <div>
          <h1 class="text-3xl font-bold mb-5">Ethan Rouimi</h1>
          <div class="flex align-middle">
            <Pin /> 
            <h2 class="text-xl ml-1 text-[#aaaaaa] "> Paris, France </h2>
          </div>
        </div>

        <div class="flex gap-3 text-3xl">
          <div class="transition hover:bg-gray-800 hover:border-gray-600 border-2 p-2 ease-in-out rounded-lg h-fit w-fit flex justify-center items-center">
            <a class="fa-brands fa-github"  href="https://github.com/Ethanol48"></a>
          </div>

          <div class="transition hover:bg-gray-800 hover:border-gray-600 border-2 p-2 ease-in-out rounded-lg h-fit w-fit flex justify-center items-center">
            <a class="fa-brands fa-medium" href="https://linkedin.com/in/ethan-rouimi"></a>
          </div>

          <div class="transition hover:bg-gray-800 hover:border-gray-600 border-2 p-2 ease-in-out rounded-lg h-fit w-fit flex justify-center items-center">
            <a class="fa-brands fa-linkedin" href="https://medium.com/@ethan-rouimi"></a>
          </div>
      </div>
      </Card.Content>

      <Card.Content class="gap-1 mt-[-20px] text-xl">
        First year student in Computer Science Engineering at EPITA, Paris, France.
      </Card.Content>
  </Card.Root>
</div>

