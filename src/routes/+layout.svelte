<script lang="ts">
	import '../app.css';
	import '@fortawesome/fontawesome-free/css/all.min.css';

	let { children } = $props();


</script>

<main class="dark mt-2 flex h-screen w-screen max-w-[450px] flex-col items-center gap-2 relative">
	{@render children()}
</main>




