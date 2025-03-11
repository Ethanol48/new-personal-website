<script lang="ts">
  import History from "./History.svelte";
  import Profesional from "./Profesional.svelte";

  import * as Tabs from "$lib/components/ui/tabs/index.js";

  let tab = $state("profesional")
</script>

<Tabs.Root bind:value={tab} class="mt-9">
  <Tabs.List class="grid w-fit grid-cols-2">
    <Tabs.Trigger value="profesional" class="w-[200px]">Profesional</Tabs.Trigger>
    <Tabs.Trigger value="history" class="w-[200px]">History</Tabs.Trigger>
  </Tabs.List>
</Tabs.Root>

<Tabs.Root value={tab} class="">
  <Tabs.Content value="profesional">
    <Profesional />
  </Tabs.Content>

  <Tabs.Content value="history">
    <History />
  </Tabs.Content>
</Tabs.Root>


