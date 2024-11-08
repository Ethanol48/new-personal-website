<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from '$lib/utils.js';

	type $$Props = HTMLAttributes<HTMLDivElement>;

	let className: $$Props['class'] = undefined;
	export { className as class };
</script>

<div 
  class={
  cn("rounded-lg border-2 border-[#313C4A] text-[#815CE1] flex justify-center items-center", className)
  }
  style="margin-top: 0px;"
>
<i
	class={'fa-solid fa-code-merge w-fit text-center'}
	
>
</i>
</div>

<style>
@-moz-document url-prefix() {
  /* Estilos específicos para Firefox */
  i {
    scale: 1.3;
    /* Otros estilos específicos */
  }
}

</style>
