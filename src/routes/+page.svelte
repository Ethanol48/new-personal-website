<script lang="ts">
	import Title from '$lib/Title.svelte';
	import Experience from '$lib/Experience.svelte';
	import AboutMe from '$lib/AboutMe.svelte';
	import svelte from '$lib/assets/prog-icons/svelte-icon.svg';
	import shadcn from '$lib/assets/shadcn.png';

	let delay = 0;
	let duration = 700;
</script>

<div
	class="relative flex h-full w-full max-w-[450px] flex-col items-center gap-8 p-10 lg:max-w-[900px] lg:flex-row lg:items-start"
>
	<div class="flex w-full flex-col gap-8 lg:w-1/2">
		<Title {duration} {delay} />
		<AboutMe {duration} delay={delay + 500} />
	</div>
	<div class="w-full lg:w-1/2">
		<Experience {duration} delay={delay + 1000} />
	</div>

	<div class="flex w-full items-center justify-center gap-2 py-10">
		<p>Made with</p>
		<i class="fa-solid fa-heart text-[#bf2222]"></i>
		<p style="margin: 0px;">using</p>
		<img src={svelte} class="size-6" alt="svelte" />
		<p style="margin: 0px;">and</p>
		<img src={shadcn} class="size-6 rounded" alt="svelte-shadcn" />
	</div>
</div>
