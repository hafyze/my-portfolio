<script lang="ts">
	import CardContent from "../card/card-content.svelte";
	import Card from "../card/card.svelte";

    export let projects;
</script>

<section id="projects" class="mx-auto max-w-6xl px-4 py-20">
	<h3 class="mb-10 text-3xl font-semibold">Projects</h3>

	<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
		{#each projects as project}
			<Card class="transition hover:-translate-y-1 hover:shadow-md">
				<CardContent class="flex h-full flex-col p-6">
					<h4 class="text-lg font-semibold ">{project.title}</h4>
					{#if project.type}
						<span class="mt-1 inline-block text-xs font-medium text-muted-foreground underline">
							{project.type}
						</span>
					{/if}
					<p class="mt-2 grow text-sm text-muted-foreground">
						{project.desc}
					</p>

					<div class="mt-4 flex flex-wrap gap-2">
						{#each project.tech as t}
							<span class="rounded bg-muted px-2 py-1 text-xs">
								{t}
							</span>
						{/each}
					</div>

					<div class="mt-6 border-t pt-4">
						<a
							href={project.link}
							target="_blank"
							class="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
						>
							View Project →
						</a>
					</div>
				</CardContent>
			</Card>
		{/each}
	</div>
</section>