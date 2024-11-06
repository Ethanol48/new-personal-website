<script lang="ts">
	import Title from '$lib/Title.svelte';
	import Experience from '$lib/Experience.svelte';
	import AboutMe from '$lib/AboutMe.svelte';

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
</div>
