import type { Metadata } from "next";
import { FileDown, Github, Linkedin, Mail } from "lucide-react";

import { education, experience } from "@/lib/data/experience";
import { skillGroups } from "@/lib/data/skills";
import { site } from "@/lib/data/site";
import { Badge } from "@/components/ui/badge";
import { buttonClasses } from "@/components/ui/button";
import { Reveal } from "@/components/sections/reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "Software engineer at Stikbook INC building backend systems and cloud infrastructure. Experience, skills, and education.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <Reveal>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          About
        </h1>
        <p className="mt-6 leading-relaxed text-muted-foreground">
          I&apos;m {site.name}, a software engineer based in {site.location}.
          I work at {site.company}, where I build and operate production
          backend systems — Spring Boot microservices, event-driven pipelines
          on AWS, and the observability that keeps them healthy. I care about
          clean architecture, fast iteration, and reliability under real
          usage.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a href={site.resume} download className={buttonClasses("default")}>
            <FileDown className="h-4 w-4" />
            Download resume
          </a>
          <a
            href={site.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className={buttonClasses("ghost", "icon")}
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={site.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className={buttonClasses("ghost", "icon")}
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${site.email}`}
            aria-label="Email"
            className={buttonClasses("ghost", "icon")}
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </Reveal>

      <Reveal className="mt-16">
        <h2 className="text-2xl font-semibold tracking-tight">Experience</h2>
        <div className="mt-8 space-y-10 border-l border-border pl-6">
          {experience.map((job) => (
            <div key={`${job.company}-${job.role}`} className="relative">
              <span className="absolute -left-[1.85rem] top-1.5 h-2.5 w-2.5 rounded-full border border-border bg-accent" />
              <p className="font-mono text-xs text-muted-foreground">
                {job.start} — {job.end}
              </p>
              <h3 className="mt-1 font-semibold">
                {job.role}{" "}
                <span className="font-normal text-muted-foreground">
                  · {job.company}
                </span>
              </h3>
              <ul className="mt-3 list-disc space-y-2 pl-4 text-sm leading-relaxed text-muted-foreground">
                {job.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {job.stack.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal className="mt-16">
        <h2 className="text-2xl font-semibold tracking-tight">Skills</h2>
        <div className="mt-8 space-y-6">
          {skillGroups.map((group) => (
            <div
              key={group.label}
              className="grid gap-2 sm:grid-cols-[200px_1fr] sm:gap-6"
            >
              <h3 className="font-mono text-sm text-muted-foreground">
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {group.skills.map((skill) => (
                  <Badge key={skill}>{skill}</Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal className="mt-16">
        <h2 className="text-2xl font-semibold tracking-tight">Education</h2>
        <div className="mt-8 space-y-8 border-l border-border pl-6">
          {education.map((entry) => (
            <div key={entry.school} className="relative">
              <span className="absolute -left-[1.85rem] top-1.5 h-2.5 w-2.5 rounded-full border border-border bg-accent" />
              <p className="font-mono text-xs text-muted-foreground">
                {entry.start} — {entry.end}
              </p>
              <h3 className="mt-1 font-semibold">{entry.school}</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {entry.program}
              </p>
              <ul className="mt-3 list-disc space-y-1 pl-4 text-sm leading-relaxed text-muted-foreground">
                {entry.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  );
}
