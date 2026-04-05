<script lang="ts">
	export let skillGroups: SkillGroups;
</script>

<section id="skills" class="mx-auto max-w-6xl px-4 py-16 sm:py-20">
	<div class="mb-8 max-w-3xl">
		<h3 class="text-3xl font-semibold">Skills & Tools</h3>
		<p class="mt-3 text-muted-foreground">
			My toolkit spans frontend engineering, backend development, and data-focused work. I enjoy
			building products where clean implementation and analytical thinking support each other.
		</p>
	</div>

	<div class="space-y-8">
		{#each Object.entries(skillGroups) as [group, data]}
			<div>
				<p class="mb-3 font-medium">
					{group === 'DataAndML' ? 'Data & ML' : group}
				</p>

				<div class="flex flex-wrap gap-3">
					{#each data.items as skill}
						<span class={`rounded-md px-3 py-1 text-sm ${data.color}`}>
							{skill}
						</span>
					{/each}
				</div>
			</div>
		{/each}
	</div>
</section>
