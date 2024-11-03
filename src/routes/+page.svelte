<script lang="ts">
	import Title from '$lib/Title.svelte';
	import Experience from '$lib/Experience.svelte';
	import WhatIUse from '$lib/WhatIUse.svelte';

	let delay = 0;
	let duration = 700;
</script>

<div class="relative flex h-full w-full flex-col items-center gap-8 p-5">
	<Title {duration} {delay} />
	<WhatIUse {duration} delay={delay + 500} />
	<Experience {duration} delay={delay + 1000} />
</div>
