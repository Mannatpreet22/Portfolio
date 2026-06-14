import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { formatDate, type Post } from "@/lib/mdx";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "./reveal";

export function RecentPosts({ posts }: { posts: Post[] }) {
  if (posts.length === 0) return null;

  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
        <Reveal>
          <SectionHeading
            title="Recent writing"
            description="Notes on backend systems, cloud infrastructure, and lessons from production."
          />
        </Reveal>
        <div className="space-y-2">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.08}>
              <Link
                href={`/blog/${post.slug}`}
                className="group -mx-4 flex flex-col gap-1 rounded-lg px-4 py-4 transition-colors hover:bg-muted sm:flex-row sm:items-baseline sm:justify-between sm:gap-4"
              >
                <span className="font-medium group-hover:text-accent">
                  {post.title}
                </span>
                <time
                  dateTime={post.date}
                  className="shrink-0 font-mono text-xs text-muted-foreground"
                >
                  {formatDate(post.date)}
                </time>
              </Link>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
          >
            All posts
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
