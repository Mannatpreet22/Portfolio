# mkhurana.com — Portfolio

Personal portfolio of **Mannatpreet Singh Khurana**, Software Engineer at Stikbook INC.

Live at [mkhurana.com](https://www.mkhurana.com).

## Stack

- **Framework:** Next.js 15 (App Router, fully static pages) + React 19 + TypeScript
- **Styling:** Tailwind CSS with a CSS-variable token system, dark/light themes via `next-themes`
- **Content:** MDX blog and project case studies (`next-mdx-remote`, `gray-matter`, `rehype-pretty-code` + Shiki dual-theme highlighting)
- **APIs:** Gemini-powered portfolio chatbot, Nodemailer contact form — both rate-limited
- **Extras:** sitemap, robots, RSS feed, OG images via `next/og`, JSON-LD, Vercel Analytics

## Structure

```
app/                  # Routes: home, /projects(+[slug]), /blog(+[slug]), /about, APIs
components/
  layout/             # Navbar, footer, theme provider/toggle
  sections/           # Hero, featured projects, recent posts, contact — props-driven
  ui/                 # Hand-rolled primitives (button, card, badge, inputs)
  mdx/                # MDX renderer + element styling
  chat/               # Floating chatbot widget
content/
  blog/*.mdx          # Blog posts (frontmatter: title, description, date, tags, published)
  projects/*.mdx      # Project case studies
lib/
  data/               # Single source of truth: site, projects, experience, skills
  mdx.ts              # Content loading + frontmatter validation
  chatbot.ts          # Gemini chatbot context + generation
  rate-limit.ts       # In-memory per-IP sliding window
```

## Development

```bash
npm install
cp .env.example .env   # fill in EMAIL_USER, EMAIL_PASS, EMAIL_TO, GEMINI_API_KEY
npm run dev
```

## Writing a blog post

Add `content/blog/my-post.mdx`:

```mdx
---
title: My Post
description: One-line summary shown in lists and meta tags.
date: "2026-06-12"
tags: [backend, aws]
published: true
---

Post body in MDX...
```

Set `published: false` to keep a draft out of the build.
