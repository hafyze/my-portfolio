<script lang="ts">
	import { BriefcaseBusiness, FolderKanban, Mail, SquareChartGantt, UserRound } from '@lucide/svelte';
	import { Button } from '$lib/components/ui/button';
	import { Separator } from '$lib/components/ui/separator';
	import { experiences, projects, skillGroups } from '$lib/data/portfolio';

	import Skills from '$lib/components/ui/Skills/Skills.svelte';
	import ProjectCard from '$lib/components/ui/ProjectCard/ProjectCard.svelte';
	import Experience from '$lib/components/ui/experience/Experience.svelte';
	import About from '$lib/components/ui/about/About.svelte';
	import Contact from '$lib/components/ui/contact/Contact.svelte';
</script>

<header class="sticky top-0 z-50 border-b bg-background">
	<div class="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:py-4">
		<h1 class="max-w-[13rem] text-base font-bold leading-tight sm:max-w-none sm:text-lg">
			Mohamad Zulhafiz Bin Mohd Jaafar
		</h1>
		<nav class="hidden gap-6 text-sm font-medium sm:flex">
			<a class="transition hover:text-primary" href="#projects">Projects</a>
			<a class="transition hover:text-primary" href="#skills">Skills</a>
			<a class="transition hover:text-primary" href="#experience">Experience</a>
			<a class="transition hover:text-primary" href="#about">About</a>
			<a class="transition hover:text-primary" href="#contact">Contact</a>
		</nav>
	</div>
</header>

<section class="mx-auto max-w-6xl px-4 py-16 pb-20 sm:py-28 sm:pb-28">
	<p class="text-[11px] font-medium tracking-[0.18em] text-muted-foreground uppercase sm:text-sm sm:tracking-[0.24em]">
		Software Engineer in Training / Data Science Student
	</p>
	<h2 class="mt-4 max-w-4xl text-3xl leading-tight font-bold tracking-tight sm:text-5xl lg:text-6xl">
		I build full-stack products with clean user experiences and data-driven intelligence.
	</h2>

	<p class="mt-5 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-lg sm:leading-7">
		I am Mohamad Zulhafiz Bin Mohd Jaafar, a software engineering student with two years of
		professional experience building industrial software, business tools, production websites,
		analytics dashboards, and ML-focused applications.
	</p>

	<div class="mt-7 flex flex-col gap-3 sm:flex-row">
		<a href="#projects">
			<Button class="w-full sm:w-auto">Explore Projects</Button>
		</a>
		<a href="#contact">
			<Button variant="outline" class="w-full sm:w-auto">Let's Connect</Button>
		</a>
	</div>

	<div class="mt-10 grid max-w-3xl gap-3 sm:grid-cols-3 sm:gap-4">
		<div class="rounded-2xl border bg-card p-4 sm:p-5">
			<p class="text-xl font-semibold sm:text-2xl">6+</p>
			<p class="mt-2 text-sm text-muted-foreground">Portfolio projects shipped</p>
		</div>
		<div class="rounded-2xl border bg-card p-4 sm:p-5">
			<p class="text-xl font-semibold sm:text-2xl">2+ years</p>
			<p class="mt-2 text-sm text-muted-foreground">Hands-on professional experience</p>
		</div>
		<div class="rounded-2xl border bg-card p-4 sm:p-5">
			<p class="text-xl font-semibold sm:text-2xl">Full-stack + ML</p>
			<p class="mt-2 text-sm text-muted-foreground">Focused on practical intelligent systems</p>
		</div>
	</div>
</section>

<Separator />

<section id="skills">
	<Skills {skillGroups} />
</section>

<Separator />

<section id="projects">
	<ProjectCard {projects} />
</section>

<Separator />

<section id="experience">
	<Experience {experiences} />
</section>

<Separator />

<section id="about">
	<About />
</section>

<Separator />

<section id="contact">
	<Contact />
</section>

<footer class="border-t py-6 pb-24 text-center text-sm text-muted-foreground sm:pb-6">
	{new Date().getFullYear()} Hafyze. Built with SvelteKit & Shadcn
</footer>

<nav class="fixed inset-x-0 bottom-[max(0.5rem,env(safe-area-inset-bottom))] z-50 flex justify-center px-2 sm:hidden">
	<div class="grid w-full max-w-sm grid-cols-5 rounded-2xl border bg-background/95 p-1.5 shadow-lg backdrop-blur">
		<a
			href="#projects"
			class="flex min-w-0 flex-col items-center gap-1 rounded-xl px-1 py-1.5 text-[10px] font-medium text-muted-foreground transition hover:bg-muted hover:text-foreground"
		>
			<FolderKanban class="h-3.5 w-3.5" />
			<span>Projects</span>
		</a>
		<a
			href="#skills"
			class="flex min-w-0 flex-col items-center gap-1 rounded-xl px-1 py-1.5 text-[10px] font-medium text-muted-foreground transition hover:bg-muted hover:text-foreground"
		>
			<SquareChartGantt class="h-3.5 w-3.5" />
			<span>Skills</span>
		</a>
		<a
			href="#experience"
			class="flex min-w-0 flex-col items-center gap-1 rounded-xl px-1 py-1.5 text-[10px] font-medium text-muted-foreground transition hover:bg-muted hover:text-foreground"
		>
			<BriefcaseBusiness class="h-3.5 w-3.5" />
			<span>Work</span>
		</a>
		<a
			href="#about"
			class="flex min-w-0 flex-col items-center gap-1 rounded-xl px-1 py-1.5 text-[10px] font-medium text-muted-foreground transition hover:bg-muted hover:text-foreground"
		>
			<UserRound class="h-3.5 w-3.5" />
			<span>About</span>
		</a>
		<a
			href="#contact"
			class="flex min-w-0 flex-col items-center gap-1 rounded-xl px-1 py-1.5 text-[10px] font-medium text-muted-foreground transition hover:bg-muted hover:text-foreground"
		>
			<Mail class="h-3.5 w-3.5" />
			<span>Contact</span>
		</a>
	</div>
</nav>
