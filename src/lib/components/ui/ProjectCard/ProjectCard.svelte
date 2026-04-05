<script lang="ts">
	import CardContent from '../card/card-content.svelte';
	import Card from '../card/card.svelte';

	export let projects;
</script>

<section id="projects" class="mx-auto max-w-6xl px-4 py-16 sm:py-20">
	<div class="mb-10 flex max-w-3xl flex-col gap-3">
		<h3 class="text-2xl font-semibold sm:text-3xl">Selected Projects</h3>
		<p class="text-sm text-muted-foreground sm:text-base">
			A mix of production websites, full-stack applications, and data-driven systems that reflect
			how I build software with both product usability and technical depth in mind.
		</p>
	</div>

	<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
		{#each projects as project}
			<Card class="border-border/70 transition hover:-translate-y-1 hover:shadow-md">
				<CardContent class="flex h-full flex-col p-5 sm:p-6">
					<div class="flex flex-col items-start gap-3 sm:flex-row sm:justify-between">
						<h4 class="text-base font-semibold sm:text-lg">{project.title}</h4>
						{#if project.type}
							<span
								class="rounded-full bg-muted px-2.5 py-1 text-[11px] font-medium whitespace-nowrap text-muted-foreground"
							>
								{project.type}
							</span>
						{/if}
					</div>

					<p class="mt-3 grow text-sm leading-6 text-muted-foreground">
						{project.desc}
					</p>

					<div class="mt-4 flex flex-wrap gap-2">
						{#each project.tech as t}
							<span class="rounded bg-muted px-2 py-1 text-xs">
								{t}
							</span>
						{/each}
					</div>

					<div class="mt-6 flex flex-wrap gap-4 border-t pt-4 text-sm font-medium">
						{#if project.live}
							<a
								href={project.live}
								target="_blank"
								rel="noopener noreferrer"
								class="text-primary hover:underline"
							>
								Live Demo ->
							</a>
						{/if}

						{#if project.github}
							<a
								href={project.github}
								target="_blank"
								rel="noopener noreferrer"
								class="text-primary hover:underline"
							>
								GitHub ->
							</a>
						{/if}
					</div>
				</CardContent>
			</Card>
		{/each}
	</div>
</section>
