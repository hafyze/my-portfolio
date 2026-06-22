<script lang="ts">
	export let education;
</script>

<section id="education" class="mx-auto max-w-6xl px-4 py-16 sm:py-20">
	<div class="mb-10 max-w-3xl">
		<h3 class="text-2xl font-semibold sm:text-3xl">Education & Certifications</h3>
		<p class="mt-3 text-sm text-muted-foreground sm:text-base">
			Academic background in software engineering, data science, and practical development training.
		</p>
	</div>

	<div class="grid gap-5 lg:grid-cols-2">
		{#each education as item}
			<article class="rounded-2xl border bg-card p-5 sm:p-6">
				<div class="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
					<div>
						<h4 class="text-lg font-semibold">{item.program}</h4>
						<p class="mt-1 text-sm text-foreground/80">{item.school}</p>
					</div>
					<span class="shrink-0 text-sm font-medium text-muted-foreground">{item.duration}</span>
				</div>

				<p class="mt-4 text-sm font-medium text-foreground/90">{item.result}</p>

				<div class="mt-4 flex flex-wrap gap-2">
					{#each item.courses as course}
						<span class="rounded bg-muted px-2 py-1 text-xs text-muted-foreground">
							{course}
						</span>
					{/each}
				</div>
			</article>
		{/each}
	</div>
</section>
