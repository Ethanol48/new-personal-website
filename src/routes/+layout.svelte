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
</main>
