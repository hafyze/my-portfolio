<script lang="ts">
	export let experiences;
</script>

<section id="experience" class="mx-auto max-w-6xl px-4 py-16 sm:py-20">
	<div class="mb-10 max-w-3xl">
		<h3 class="text-2xl font-semibold sm:text-3xl">Work Experience</h3>
		<p class="mt-3 text-sm text-muted-foreground sm:text-base">
			Professional experience building software for real operational environments, with a focus on
			industrial systems and monitoring workflows.
		</p>
	</div>

	<div class="space-y-6">
		{#each experiences as experience}
			<div class="rounded-2xl border bg-card p-5 sm:p-6">
				<div class="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
					<div>
						<h4 class="text-lg font-semibold sm:text-xl">{experience.role}</h4>
						<p class="text-sm text-foreground/80 sm:text-base">{experience.company}</p>
					</div>
					<span class="shrink-0 text-sm font-medium text-muted-foreground">{experience.duration}</span>
				</div>

				<p class="mt-4 max-w-3xl leading-7 text-muted-foreground">
					{experience.summary}
				</p>

				<ul class="mt-5 grid gap-2 text-sm leading-6 text-muted-foreground sm:grid-cols-2">
					{#each experience.highlights as highlight}
						<li class="rounded-md border bg-background px-3 py-2">{highlight}</li>
					{/each}
				</ul>

				{#if experience.tech}
					<div class="mt-5 flex flex-wrap gap-2 border-t pt-4">
						{#each experience.tech as tech}
							<span class="rounded bg-muted px-2 py-1 text-xs text-muted-foreground">
								{tech}
							</span>
						{/each}
					</div>
				{/if}
			</div>
		{/each}
	</div>
</section>
