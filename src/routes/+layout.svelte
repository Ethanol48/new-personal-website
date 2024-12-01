<script lang="ts">
	import '../app.css';
	import '@fortawesome/fontawesome-free/css/all.min.css';
	import { Toaster } from '$lib/components/ui/sonner';
	import svelte from '$lib/assets/prog-icons/svelte-icon.svg';
	import shadcn from '$lib/assets/shadcn.png';

	let { children } = $props();
</script>

<Toaster
	theme="dark"
	toastOptions={{
		class: 'my-toast',
		descriptionClass: 'my-toast-description'
	}}
/>

<main class="dark relative flex h-screen w-screen flex-col items-center gap-2 pt-2">
	{@render children()}

	<div class="flex w-full items-center justify-center gap-2 py-10">
		<p>Made with</p>
		<i class="fa-solid fa-heart text-[#bf2222]"></i>
		<p style="margin: 0px;">using</p>
		<img src={svelte} class="size-6" alt="svelte" />
		<p style="margin: 0px;">and</p>
		<img src={shadcn} class="size-6 rounded" alt="svelte-shadcn" />
	</div>
</main>

<style lang="scss">
@font-face { 
    font-family: 'Virgil';
    font-weight: 400;
    font-style: normal;
    src:  url("../lib/assets/Virgil.woff2") format('woff2'),
}


@font-face { 
    font-family: 'Virgil';
    font-weight: 600;
    font-style: normal;
    src:  url("../lib/assets/Virgil.woff2") format('woff2'),
}

@font-face { 
    font-family: 'Virgil';
    font-weight: 700;
    font-style: normal;
    src:  url("../lib/assets/Virgil.woff2") format('woff2'),
}

:global(.hand-written) {
  font-family: Virgil;
}
</style>
