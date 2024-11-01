<script lang="ts">
	import notFound from '$lib/assets/404-image.svg';
	import { type Project } from '$lib';

	let { project }: { project: Project } = $props();
</script>

<div class="mt-5 mt-0 p-5 pt-1" style="max-height: 380px;">
	<div class="overlay relative overflow-hidden rounded-xl">
		{#if project.photo === ''}


			<img
				src={notFound}
				class="z-0 mx-auto overflow-hidden rounded-xl p-[1px]"
				alt="image-not-found"
			/>


		{:else}
			<img
				src={project.photo}
				class="z-0 mx-auto overflow-hidden rounded-xl p-[1px]"
				alt={project.name + ' photo'}
			/>
		{/if}

		<div class="absolute bottom-4 left-1 z-40 p-2">
			<h3 class="">{project.name}</h3>
			<p class="m-0" style="font-size: 15px;">
				{@html project.desc}
			</p>
		</div>
	</div>
</div>

<style>
	.overlay img {
		filter: blur(1px);
		transition: transform 0.25s ease;
		transition: filter 0.25s ease;
	}

	.overlay:hover img {
		filter: unset;
		transform: scale(1.001);
	}

	.overlay::before {
		content: '';
		z-index: 10;
		width: 100%;
		height: 100%;
		display: block;
		position: absolute;

		background: rgb(0, 0, 0);
		background: linear-gradient(
			0deg,
			rgba(0, 0, 0, 0.7) 0%,
			rgba(150, 150, 150, 0.6) 71%,
			rgba(255, 255, 255, 0.1) 100%
		);
	}
</style>
