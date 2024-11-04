<script lang="ts">
  import { cn } from "$lib/utils.js";

  import flagOfSpain from "$lib/assets/Spain-flag.png"  


	let className = undefined;
	export { className as class };

  export let rotate = 0;
  export let style = "";

  let styleAjusted = `rotate: ${rotate}deg; ${style}`;

  console.log("classname: ", className);
</script>

<div 
  class={cn("container-bandera w-fit h-fit", className)}
  style={styleAjusted}
>
  <div class="relative otro">
    <svg class="absolute top-1 left-[1px] z-10" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="4" zoomAndPan="magnify" viewBox="0 0 4 3" height="4" preserveAspectRatio="xMidYMid meet" version="1.0">
      <circle cx="1.8" cy="1.5" r="0.8" stroke="gainsboro" fill="gainsboro"></circle>
    </svg>
    <svg class="stick absolute left-[1px] top-[2.5px]" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="3.5" zoomAndPan="magnify" viewBox="0 0 3 40.000001" height="40" preserveAspectRatio="xMidYMid meet" version="1.0">
      <line x1="2" y1="3" x2="2" y2="25" style="stroke:gainsboro;stroke-width:2" />
    </svg>
    <img class="flag size-7" src={flagOfSpain} alt="" />
  </div>
</div>

<style>

.otro {
  rotate: 2deg;
}

.container-bandera {
  /*margin-top: -20px;*/
  margin-left: 10px;
  animation-delay: 50ms;
}

.flag {
  margin-left: 2.5px;
}

</style>
