<script>
	import { MessageCircle } from "@lucide/svelte";
	import Button from "../button/button.svelte";

</script>

<section id="contact" class="mx-auto max-w-6xl px-4 py-20">
	<h3 class="mb-6 text-3xl font-semibold">Contact</h3>

	<p class="mb-10 text-muted-foreground">Interested in working together or discussing a project?</p>

	<!-- Contact Info -->
	<div class="mb-10 grid gap-4 grid-cols-1 sm:grid-cols-3">
		<!-- WhatsApp -->
		<div class="flex items-center gap-3">
			<span class="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
				<MessageCircle class="h-5 w-5 text-green-600" />
			</span>
			<div>
				<p class="text-sm text-muted-foreground">WhatsApp</p>
				<a
					href="https://wa.me/60134336103"
					target="_blank"
					rel="noopener noreferrer"
					class="flex items-center gap-3 rounded-lg p-3 transition hover:bg-muted"
				>
					+60 13-433 6103
				</a>
			</div>
		</div>

		<!-- Email -->
		<div class="flex items-center gap-3">
			<span class="flex h-10 w-10 items-center justify-center rounded-full bg-muted"> ✉️ </span>
			<div>
				<p class="text-sm text-muted-foreground">Email</p>
				<a
					href="mailto:mozulhafizjaafar@email.com"
					class="flex items-center gap-3 rounded-lg p-3 transition hover:bg-muted"
				>
					mozulhafizjaafar@email.com
				</a>
			</div>
		</div>

		<!-- GitHub -->
		<div class="flex items-center gap-3">
			<span class="flex h-10 w-10 items-center justify-center rounded-full bg-muted"> 💻 </span>
			<div>
				<p class="text-sm text-muted-foreground">GitHub</p>
				<a
					href="https://github.com/hafyze"
					target="_blank"
					rel="noopener noreferrer"
					class="flex items-center gap-3 rounded-lg p-3 transition hover:bg-muted"
				>
					github.com/hafyze
				</a>
			</div>
		</div>
	</div>

	<!-- CTA -->
	<a href="mailto:mozulhafizjaafar@email.com">
		<Button size="lg">Get in Touch</Button>
	</a>
</section>