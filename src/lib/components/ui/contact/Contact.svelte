<script>
	import { GitBranch, Mail, Map, MessageCircle, StepForward } from '@lucide/svelte';
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
				<GitBranch class="h-5 w-5 text-foreground" />
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
		<div class="flex items-center gap-3">
			<span class="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
				<Map class="h-5 w-5 text-foreground" />
			</span>
			<div>
				<p class="text-sm text-muted-foreground">Location</p>
				<p class="flex items-center gap-3 rounded-lg p-3 transition hover:bg-muted">
					Puchong, Selangor
				</p>
			</div>
		</div>
		<div class="flex items-center gap-3">
			<span class="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
				<svg
					viewBox="0 0 24 24"
					aria-hidden="true"
					class="h-5 w-5 fill-[#0A66C2]"
				>
					<path
						d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19ZM8.34 18.34V9.66H5.66V18.34H8.34ZM7 8.46A1.56 1.56 0 1 0 7 5.34A1.56 1.56 0 0 0 7 8.46ZM18.34 18.34V13.56C18.34 11 16.97 9.5 14.92 9.5C13.27 9.5 12.54 10.41 12.13 11.05V9.66H9.66C9.69 10.58 9.66 18.34 9.66 18.34H12.34V13.49C12.34 13.23 12.36 12.97 12.43 12.79C12.63 12.27 13.08 11.73 13.86 11.73C14.88 11.73 15.29 12.5 15.29 13.63V18.34H18.34Z"
					/>
				</svg>
			</span>
			<div>
				<p class="text-sm text-muted-foreground">LinkedIn</p>
				<a
					href="https://www.linkedin.com/in/zulhafiz"
					target="_blank"
					rel="noopener noreferrer"
					class="flex items-center gap-3 rounded-lg p-3 transition hover:bg-muted"
				>
					linkedin.com/in/zulhafiz
				</a>
			</div>
		</div>
	</div>

	<div>
		<a href="mailto:mozulhafizjaafar@email.com" class="justfiy-center mr-auto">
			<Button size="lg">Send Message <StepForward /></Button>
		</a>
	</div>
	
</section>
