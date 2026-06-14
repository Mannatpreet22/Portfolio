import type { Metadata } from "next";
import Link from "next/link";

import { formatDate, getAllPosts } from "@/lib/mdx";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Writing about backend systems, cloud infrastructure, and lessons from production.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Blog</h1>
      <p className="mt-3 text-muted-foreground">
        Notes on backend systems, cloud infrastructure, and lessons from
        production.
      </p>

      <div className="mt-12 space-y-2">
        {posts.length === 0 && (
          <p className="text-muted-foreground">No posts yet — coming soon.</p>
        )}
        {posts.map((post) => (
          <article key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="group -mx-4 block rounded-lg px-4 py-5 transition-colors hover:bg-muted"
            >
              <div className="flex items-baseline justify-between gap-4">
                <h2 className="text-lg font-semibold tracking-tight group-hover:text-accent">
                  {post.title}
                </h2>
                <time
                  dateTime={post.date}
                  className="shrink-0 font-mono text-xs text-muted-foreground"
                >
                  {formatDate(post.date)}
                </time>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {post.description}
              </p>
              <div className="mt-3 flex items-center gap-2">
                <span className="font-mono text-xs text-muted-foreground">
                  {post.readingTime}
                </span>
                {post.tags.map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
