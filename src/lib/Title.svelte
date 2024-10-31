<script>
  import Pin from "$lib/Pin.svelte";
  import * as Card from "$lib/components/ui/card";
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
          <a class="size-fit" aria-label="Github Link" href="https://github.com/Ethanol48">
            <div class="transition hover:bg-gray-800 hover:border-gray-600 border-2 p-2 ease-in-out rounded-lg h-fit w-fit flex justify-center items-center">
              <i class="fa-brands fa-github"></i>
            </div>
          </a>

          <a class="size-fit" aria-label="Medium Link" href="https://github.com/Ethanol48">
            <div class="transition hover:bg-gray-800 hover:border-gray-600 border-2 p-2 ease-in-out rounded-lg h-fit w-fit flex justify-center items-center">
              <i class="fa-brands fa-medium"></i>
            </div>
          </a>

          <a class="size-fit" aria-label="Linkedin Link" href="https://medium.com/@ethan-rouimi">
            <div class="transition hover:bg-gray-800 hover:border-gray-600 border-2 p-2 ease-in-out rounded-lg h-fit w-fit flex justify-center items-center">
              <i class="fa-brands fa-linkedin"></i>
            </div>
          </a>
      </div>
      </Card.Content>

    <Card.Content class="gap-1 mt-[-20px] text-xl">
      <p>
        First year student in Computer Science Engineering at EPITA, Paris, France.
      </p>
    </Card.Content>
  </Card.Root>
</div>

