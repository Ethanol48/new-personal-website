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

<main class="dark relative flex h-screen w-screen max-w-[450px] flex-col items-center gap-2 pt-2">
	{@render children()}

	<div class="flex items-center gap-2 pb-14">
		<p>Made with</p>
		<i class="fa-regular fa-heart"></i>
		<p style="margin: 0px;">using</p>
		<img src={svelte} class="size-6" alt="svelte" />
		<p style="margin: 0px;">and</p>
		<img src={shadcn} class="size-6 rounded" alt="shadcn" />
	</div>
</main>

<style>
</style>
