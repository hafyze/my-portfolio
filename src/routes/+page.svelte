<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import { Card, CardContent } from "$lib/components/ui/card";
  import { Separator } from "$lib/components/ui/separator";

  const skills = [
    "SvelteKit",
    "TypeScript",
    "TailwindCSS",
    "shadcn",
    "Python",
    "FastAPI",
    "MongoDB",
    "Machine Learning",
    "Data Analysis"
  ];

  const projects = [
    {
      title: "Smart Car Comparison & Recommendation System",
      desc: "AI-powered platform to compare cars, analyze market trends, and recommend vehicles based on user preferences.",
      tech: ["SvelteKit", "Python", "MongoDB", "ML"]
    },
    {
      title: "Web-Based Analytics Dashboard",
      desc: "Interactive dashboard for real-time insights, filtering, and data visualization.",
      tech: ["SvelteKit", "Charts", "API"]
    },
    {
      title: "Roomstay Booking Website",
      desc: "Modern booking platform focused on clean UI, performance, and SEO optimization.",
      tech: ["SvelteKit", "Tailwind", "Vercel"]
    }
  ];
</script>

<!-- NAVBAR -->
<header class="sticky top-0 z-50 bg-background border-b">
  <div class="max-w-6xl mx-auto flex justify-between items-center py-4 px-4">
    <h1 class="font-bold text-lg">Hafyze</h1>
    <nav class="flex gap-6 text-sm">
      <a href="#projects" class="hover:text-primary">Projects</a>
      <a href="#skills" class="hover:text-primary">Skills</a>
      <a href="#about" class="hover:text-primary">About</a>
      <a href="#contact" class="hover:text-primary">Contact</a>
    </nav>
  </div>
</header>

<!-- HERO -->
<section class="max-w-6xl mx-auto px-4 py-28">
  <h2 class="text-5xl font-bold leading-tight">
    Data Science &<br />
    Web Developer
  </h2>

  <p class="mt-6 max-w-xl text-muted-foreground">
    Software Engineering student specializing in data-driven systems,
    modern web applications, and AI-powered recommendations.
  </p>

  <div class="mt-8 flex gap-4">
    <a href="#projects">
      <Button>View Projects</Button>
    </a>
    <a href="https://github.com/" target="_blank">
      <Button variant="outline">GitHub</Button>
    </a>
  </div>
</section>

<Separator />

<!-- SKILLS -->
<section id="skills" class="max-w-6xl mx-auto px-4 py-20">
  <h3 class="text-3xl font-semibold mb-8">Skills & Tools</h3>

  <div class="flex flex-wrap gap-3">
    {#each skills as skill}
      <span class="px-3 py-1 rounded-md text-sm bg-muted">
        {skill}
      </span>
    {/each}
  </div>
</section>

<Separator />

<!-- PROJECTS -->
<section id="projects" class="max-w-6xl mx-auto px-4 py-20">
  <h3 class="text-3xl font-semibold mb-10">Projects</h3>

  <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
    {#each projects as project}
      <Card>
        <CardContent class="p-6">
          <h4 class="font-semibold text-lg">{project.title}</h4>
          <p class="text-sm text-muted-foreground mt-2">
            {project.desc}
          </p>

          <div class="flex flex-wrap gap-2 mt-4">
            {#each project.tech as t}
              <span class="text-xs px-2 py-1 bg-muted rounded">
                {t}
              </span>
            {/each}
          </div>
        </CardContent>
      </Card>
    {/each}
  </div>
</section>

<Separator />

<!-- ABOUT -->
<section id="about" class="max-w-6xl mx-auto px-4 py-20">
  <h3 class="text-3xl font-semibold mb-6">About Me</h3>

  <p class="max-w-3xl text-muted-foreground leading-relaxed">
    I’m a Software Engineering student specializing in Data Science with hands-on
    experience building modern web applications and intelligent systems.
    <br /><br />
    I enjoy working on projects that combine clean UI, scalable backend design,
    and meaningful data insights — especially recommendation systems and analytics platforms.
  </p>
</section>

<Separator />

<!-- CONTACT -->
<section id="contact" class="max-w-6xl mx-auto px-4 py-20">
  <h3 class="text-3xl font-semibold mb-6">Contact</h3>

  <p class="text-muted-foreground mb-6">
    Interested in working together or discussing a project?
  </p>

  <a href="mailto:your@email.com">
    <Button>Get in Touch</Button>
  </a>
</section>

<!-- FOOTER -->
<footer class="border-t py-6 text-center text-sm text-muted-foreground">
  © {new Date().getFullYear()} Hafyze. Built with SvelteKit &
</footer>