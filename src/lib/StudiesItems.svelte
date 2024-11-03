<script lang="ts">
	type Education = {
		name: string;
		dateFrom: string;
		dateTo: string;
		desc: string;
		bulletPoints: string[];
	};

	let studies: Education[] = [
		{
			name: 'EPITA',
			dateFrom: 'September 2024',
			dateTo: 'Ongoing ... ',
			desc: 'Computer Engeneering',
			bulletPoints: ['hola ', 'hola 2', 'hola 3']
		},
		{
			name: 'Le Wagon',
			dateFrom: 'September 2023',
			dateTo: 'March 2024',
			desc: 'Data Science and IA',
			bulletPoints: ['hallo', 'hallo2', 'hallo3']
		}
	];
</script>

<div class="mt-3 pl-7">
	{#each studies as study}
		<div class="mb-5">
			<h3>{study.name}</h3>

			<div class="flex items-center justify-start gap-2">
				<p class="m-0 p-0 text-sky-200">
					{study.dateFrom}
				</p>

				<p class="m-0 p-0" style="margin: 0px;">-</p>

				<p class="m-0 p-0 text-sky-200" style="margin: 0px;">
					{study.dateTo}
				</p>
			</div>

			{#if study.bulletPoints.length != 0}
				{#each study.bulletPoints as bullet}
					<ul>
						<li>{bullet}</li>
					</ul>
				{/each}
			{/if}

			{study.desc}
		</div>
	{/each}
</div>
