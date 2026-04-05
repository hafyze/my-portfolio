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
					<span class="text-sm font-medium text-muted-foreground">{experience.duration}</span>
				</div>

				<p class="mt-4 max-w-3xl leading-7 text-muted-foreground">
					{experience.summary}
				</p>

				<div class="mt-5 flex flex-wrap gap-2">
					{#each experience.highlights as highlight}
						<span class="rounded-full border bg-background px-3 py-1 text-xs text-muted-foreground sm:text-sm">
							{highlight}
						</span>
					{/each}
				</div>
			</div>
		{/each}
	</div>
</section>
