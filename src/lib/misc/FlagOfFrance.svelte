<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
  import { cn } from "$lib/utils.js";
  import flagOfFrance from "$lib/assets/France-flag.png"  


	let className = undefined;
	export { className as class };

  export let rotate = 0;
  export let style = "";

  let styleAjusted = `rotate: ${rotate}deg; ${style}`;

  console.log("classname: ", className);
</script>

<div 
  class={cn("absolute container-bandera w-fit h-fit", className)}
  style={styleAjusted}
>
  <div class="relative">
    <svg class="stick absolute left-[1px] top-[2.5px]" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="3.5" zoomAndPan="magnify" viewBox="0 0 3 40.000001" height="40" preserveAspectRatio="xMidYMid meet" version="1.0">
      <circle cx="2" cy="2.5" r="1" stroke="gainsboro" fill="gainsboro"></circle>
      <line x1="2" y1="3" x2="2" y2="25" style="stroke:gainsboro;stroke-width:2" />
    </svg>
    <img class="flag size-7" src={flagOfFrance} alt="" />
  </div>
</div>

<style>
/*.container {*/
/*  scale: 2;*/
/*}*/

.flag {
  rotate: 0deg;
  margin-left: 2.5px;
}

</style>
