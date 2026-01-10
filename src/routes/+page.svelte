<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Card, CardContent } from '$lib/components/ui/card';
	import { Separator } from '$lib/components/ui/separator';
	import { MessageCircle } from '@lucide/svelte';

	const skillGroups = {
  Frontend: {
    color: 'bg-blue-100 text-blue-700',
    items: ['SvelteKit', 'TypeScript', 'TailwindCSS', 'shadcn']
  },
  Backend: {
    color: 'bg-green-100 text-green-700',
    items: ['Python', 'FastAPI', 'MongoDB']
  },
  Data: {
    color: 'bg-purple-100 text-purple-700',
    items: ['Data Science', 'Machine Learning', 'Data Analysis']
  }
};


	const projects = [
		{
			title: 'Smart Car Comparison & Recommendation System',
			desc: 'AI-powered platform to compare cars, analyze market trends, and recommend vehicles based on user preferences.',
			tech: ['SvelteKit', 'Python', 'MongoDB', 'ML'],
			link: 'https://github.com/hafyze/Degree_FYP'
		},
		{
			title: 'Malaysia Vehicle Registration Analytics Dashboard',
			desc: 'A web-based analytics dashboard that visualizes monthly Malaysian vehicle registration data from government sources, providing interactive charts, filtering, and trend insights.',
			tech: ['SvelteKit', 'Data Visualization', 'Public API'],
			link: 'https://github.com/hafyze/gov-data-car'
		},
		{
			title: 'Roomstay Booking Website',
			desc: 'Modern booking platform focused on clean UI, performance, and SEO optimization.',
			tech: ['SvelteKit', 'Tailwind', 'Vercel'],
			link: 'https://www.narkg.com/'
		}
	];
</script>

<!-- NAVBAR -->
<header class="sticky top-0 z-50 border-b bg-background">
	<div class="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
		<h1 class="text-lg font-bold">Mohamad Zulhafiz Bin Mohd Jaafar</h1>
		<nav class="hidden gap-6 text-sm font-medium sm:flex">
			<a class="transition hover:text-primary" href="#projects">Projects</a>
			<a class="transition hover:text-primary" href="#skills">Skills</a>
			<a class="transition hover:text-primary" href="#about">About</a>
			<a class="transition hover:text-primary" href="#contact">Contact</a>
		</nav>
	</div>
</header>

<!-- HERO -->
<section class="mx-auto max-w-6xl px-4 py-28">
	<h2 class="mt-3 text-4xl leading-tight font-bold tracking-tight sm:text-5xl">
		Data Science &<br />
		Web Developer
	</h2>

	<p class="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
		Software Engineering student focused on building intelligent, data-driven web applications and
		AI-powered systems.
	</p>

	<div class="mt-8 flex flex-col gap-4 sm:flex-row">
		<a href="#projects">
			<Button>View Projects</Button>
		</a>
		<a href="https://github.com/hafyze" target="_blank">
			<Button variant="outline">GitHub</Button>
		</a>
	</div>
</section>

<Separator />

<!-- SKILLs -->
<section id="skills" class="mx-auto max-w-6xl px-4 py-16 sm:py-20">
  <h3 class="mb-8 text-3xl font-semibold">Skills & Tools</h3>

  <div class="space-y-8">
    {#each Object.entries(skillGroups) as [group, data]}
      <div>
        <p class="mb-3 font-medium">{group}</p>

        <div class="flex flex-wrap gap-3">
          {#each data.items as skill}
            <span
              class={`rounded-md px-3 py-1 text-sm ${data.color}`}
            >
              {skill}
            </span>
          {/each}
        </div>
      </div>
    {/each}
  </div>
</section>


<Separator />

<!-- PROJECTS -->
<section id="projects" class="mx-auto max-w-6xl px-4 py-20">
	<h3 class="mb-10 text-3xl font-semibold">Projects</h3>

	<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
		{#each projects as project}
			<Card class="transition hover:-translate-y-1 hover:shadow-md">
				<CardContent class="flex h-full flex-col p-6">
					<h4 class="text-lg font-semibold">{project.title}</h4>

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

<Separator />

<!-- ABOUT -->
<section id="about" class="mx-auto max-w-6xl px-4 py-20">
	<h3 class="mb-6 text-3xl font-semibold">About Me</h3>

	<p class="max-w-3xl leading-relaxed text-muted-foreground">
		I'm a Software Engineering student specializing in Data Science, with hands-on experience
		developing modern web applications and intelligent, data-driven systems.

		<br /><br />

		I have <span class="font-medium text-foreground">over 2 years of professional experience</span>
		in web development through internships and part-time roles, contributing to real-world
		applications in production environments. Alongside this, I actively build data science projects
		focused on machine learning, recommendation systems, and analytical insights.

		<br /><br />

		I'm particularly interested in projects that balance clean UI design, scalable backend systems,
		and practical data intelligence to solve real world problems.
	</p>
</section>

<Separator />

<!-- CONTACT -->
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

<!-- FOOTER -->
<footer class="border-t py-6 text-center text-sm text-muted-foreground">
	{new Date().getFullYear()} Hafyze. Built with SvelteKit & Shadcn
</footer>
