import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";

import {
  formatDate,
  getAllProjectStudies,
  getProjectStudyBySlug,
} from "@/lib/mdx";
import { Badge } from "@/components/ui/badge";
import { Mdx } from "@/components/mdx/mdx";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllProjectStudies().map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getProjectStudyBySlug(slug);
  if (!study) return {};

  return {
    title: `${study.title} — Case Study`,
    description: study.description,
  };
}

export default async function ProjectStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getProjectStudyBySlug(slug);
  if (!study) notFound();

  return (
    <article className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <Link
        href="/projects"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        Projects
      </Link>

      <header className="mt-8">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {study.title}
        </h1>
        <p className="mt-3 text-lg text-muted-foreground">
          {study.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {study.stack.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>
        <div className="mt-5 flex items-center gap-4 text-sm">
          {study.live && (
            <a
              href={study.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-medium text-accent hover:underline"
            >
              <ArrowUpRight className="h-4 w-4" />
              Live site
            </a>
          )}
          {study.repo && (
            <a
              href={study.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
            >
              <Github className="h-4 w-4" />
              Source code
            </a>
          )}
          <time
            dateTime={study.date}
            className="font-mono text-xs text-muted-foreground"
          >
            {formatDate(study.date)}
          </time>
        </div>
      </header>

      <div className="mt-4">
        <Mdx source={study.content} />
      </div>
    </article>
  );
}
