<script lang="ts">
  export let title: string;
  export let description: string;
  export let tech: string[];
</script>

<div class="border rounded-lg p-5 hover:shadow-md transition">
  <h3 class="font-semibold text-lg">{title}</h3>
  <p class="text-sm text-muted-foreground mt-2">{description}</p>

  <div class="flex flex-wrap gap-2 mt-4">
    {#each tech as t}
      <span class="text-xs px-2 py-1 bg-muted rounded">{t}</span>
    {/each}
  </div>
</div>
