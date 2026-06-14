import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, BookOpen, Github } from "lucide-react";

import type { Project } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { GlowCard } from "@/components/effects/glow-card";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <GlowCard>
      <Card className="group flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5">
      {project.image ? (
        <div className="relative aspect-[16/9] overflow-hidden border-b border-border bg-muted">
          <Image
            src={project.image}
            alt={`${project.title} screenshot`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </div>
      ) : (
        <div className="flex aspect-[16/9] items-center justify-center border-b border-border bg-muted">
          <span className="font-mono text-2xl text-muted-foreground">
            {project.title}
          </span>
        </div>
      )}

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-semibold tracking-tight">
          {project.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.slice(0, 5).map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>

        <div className="mt-5 flex items-center gap-4 text-sm">
          {project.caseStudy && (
            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex items-center gap-1.5 font-medium text-accent hover:underline"
            >
              <BookOpen className="h-3.5 w-3.5" />
              Case study
            </Link>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowUpRight className="h-3.5 w-3.5" />
              Live
            </a>
          )}
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
            >
              <Github className="h-3.5 w-3.5" />
              Code
            </a>
          )}
        </div>
      </div>
      </Card>
    </GlowCard>
  );
}
