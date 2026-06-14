import type { Metadata } from "next";

import { projects } from "@/lib/data/projects";
import { ProjectCard } from "@/components/sections/project-card";
import { Reveal } from "@/components/sections/reveal";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Systems and products I've built — code execution pipelines, payment apps, microservices, and more.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      <Reveal>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Projects
        </h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Systems I&apos;ve designed and shipped — from scalable code execution
          pipelines to payment platforms and low-level networking. Featured
          projects include full case studies.
        </p>
      </Reveal>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <Reveal key={project.slug} delay={Math.min(i * 0.05, 0.3)}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
