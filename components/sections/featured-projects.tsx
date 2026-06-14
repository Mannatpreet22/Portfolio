import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { featuredProjects } from "@/lib/data/projects";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectCard } from "./project-card";
import { Reveal } from "./reveal";

export function FeaturedProjects() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      <Reveal>
        <SectionHeading
          title="Featured projects"
          description="Systems I designed and shipped end-to-end — from architecture to production."
        />
      </Reveal>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((project, i) => (
          <Reveal key={project.slug} delay={i * 0.08}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-8">
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
        >
          All projects
          <ArrowRight className="h-4 w-4" />
        </Link>
      </Reveal>
    </section>
  );
}
