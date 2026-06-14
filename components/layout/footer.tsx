import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

import { site } from "@/lib/data/site";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {site.name}
        </p>
        <div className="flex items-center gap-1">
          <Link
            href={site.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <Github className="h-4 w-4" />
          </Link>
          <Link
            href={site.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <Linkedin className="h-4 w-4" />
          </Link>
          <Link
            href={`mailto:${site.email}`}
            aria-label="Email"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <Mail className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
