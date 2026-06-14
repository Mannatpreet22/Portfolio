import type { MDXComponents } from "mdx/types";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { CopyButton } from "./copy-button";

function Anchor({
  href = "",
  className,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const isInternal = href.startsWith("/") || href.startsWith("#");
  const classes = cn(
    "font-medium text-accent underline underline-offset-4 hover:no-underline",
    className
  );

  if (isInternal) {
    return <Link href={href} className={classes} {...props} />;
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={classes}
      {...props}
    />
  );
}

export const mdxComponents: MDXComponents = {
  h1: (props) => (
    <h1
      className="mt-12 scroll-mt-24 text-3xl font-bold tracking-tight"
      {...props}
    />
  ),
  h2: (props) => (
    <h2
      className="mt-12 scroll-mt-24 border-b border-border pb-2 text-2xl font-semibold tracking-tight"
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className="mt-8 scroll-mt-24 text-xl font-semibold tracking-tight"
      {...props}
    />
  ),
  h4: (props) => (
    <h4
      className="mt-6 scroll-mt-24 text-lg font-semibold tracking-tight"
      {...props}
    />
  ),
  p: (props) => (
    <p className="mt-5 leading-relaxed text-muted-foreground" {...props} />
  ),
  a: Anchor,
  ul: (props) => (
    <ul
      className="mt-5 list-disc space-y-2 pl-6 text-muted-foreground"
      {...props}
    />
  ),
  ol: (props) => (
    <ol
      className="mt-5 list-decimal space-y-2 pl-6 text-muted-foreground"
      {...props}
    />
  ),
  li: (props) => <li className="leading-relaxed" {...props} />,
  blockquote: (props) => (
    <blockquote
      className="mt-5 border-l-2 border-accent pl-4 italic text-muted-foreground"
      {...props}
    />
  ),
  strong: (props) => (
    <strong className="font-semibold text-foreground" {...props} />
  ),
  hr: () => <hr className="my-10 border-border" />,
  table: (props) => (
    <div className="mt-5 overflow-x-auto">
      <table className="w-full border-collapse text-sm" {...props} />
    </div>
  ),
  th: (props) => (
    <th
      className="border-b border-border px-3 py-2 text-left font-semibold"
      {...props}
    />
  ),
  td: (props) => (
    <td
      className="border-b border-border px-3 py-2 text-muted-foreground"
      {...props}
    />
  ),
  figure: ({ ...props }) => {
    const isCodeBlock = "data-rehype-pretty-code-figure" in props;
    if (!isCodeBlock) return <figure {...props} />;
    return (
      <figure className="group relative mt-5" {...props}>
        <CopyButton />
        {props.children}
      </figure>
    );
  },
  pre: (props) => (
    <pre
      className="overflow-x-auto rounded-lg border border-border bg-card p-4 font-mono text-sm leading-relaxed"
      {...props}
    />
  ),
  code: (props) => {
    const isBlock = "data-language" in props;
    if (isBlock) return <code {...props} />;
    return (
      <code
        className="rounded bg-muted px-1.5 py-0.5 font-mono text-[0.85em] text-foreground"
        {...props}
      />
    );
  },
  img: (props) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className="mt-5 rounded-lg border border-border"
      alt={props.alt ?? ""}
      {...props}
    />
  ),
};
