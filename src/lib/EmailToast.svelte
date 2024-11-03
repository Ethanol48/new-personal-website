<script>
	export let error = false;
</script>

{#if !error}
	<div class="flex w-fit flex-row-reverse items-center gap-5">
		<p class="m-0 p-0">Email copied succesfully !!</p>
		<i class="fa-regular fa-envelope text-2xl"></i>
	</div>
{:else}
	<div class="flex w-fit flex-row-reverse items-center gap-5">
		<div class="flex flex-col gap-0">
			<p class="m-0 p-0">There was an error copying the email :/</p>
			<p class="m-0 p-0" style="margin-top: 0px;">
				here it is: <span class="font-bold">contact@ethan-rouimi.com</span>
			</p>
		</div>
		<i class="fa-regular fa-envelope text-2xl"></i>
	</div>
{/if}
