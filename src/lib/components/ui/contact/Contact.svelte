<script>
	import { Github, Mail, MessageCircle } from '@lucide/svelte';
	import Button from '../button/button.svelte';
</script>

<section id="contact" class="mx-auto max-w-6xl px-4 py-20">
	<h3 class="mb-6 text-3xl font-semibold">Contact</h3>

	<p class="mb-10 max-w-2xl text-muted-foreground">
		I am open to full-time opportunities, freelance engagements, and collaborations in web development,
  		data products, and intelligent software systems.
	</p>

	<div class="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
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

		<div class="flex items-center gap-3">
			<span class="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
				<Mail class="h-5 w-5 text-foreground" />
			</span>
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

		<div class="flex items-center gap-3">
			<span class="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
				<Github class="h-5 w-5 text-foreground" />
			</span>
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

	<a href="mailto:mozulhafizjaafar@email.com">
		<Button size="lg">Start a Conversation</Button>
	</a>
</section>
