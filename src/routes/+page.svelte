<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Card, CardContent } from '$lib/components/ui/card';
	import { Separator } from '$lib/components/ui/separator';
	import { MessageCircle } from '@lucide/svelte';
	import {skillGroups, projects} from '$lib/data/portfolio'

	import Skills from '$lib/components/ui/Skills/Skills.svelte';
	import ProjectCard from '$lib/components/ui/ProjectCard/ProjectCard.svelte';
	import About from '$lib/components/ui/about/About.svelte';
	import Contact from '$lib/components/ui/contact/Contact.svelte';
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

<!-- Main -->
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
<section id="skills">
	<Skills {skillGroups}/>
</section>


<Separator />

<!-- PROJECTS -->
<section id="projects">
	<ProjectCard {projects}/>
</section>

<Separator />

<!-- ABOUT -->
<section id="about">
	<About />
</section>

<Separator />

<!-- CONTACT -->
<section id="contact">
	<Contact />
</section>

<!-- FOOTER -->
<footer class="border-t py-6 text-center text-sm text-muted-foreground">
	{new Date().getFullYear()} Hafyze. Built with SvelteKit & Shadcn
</footer>
