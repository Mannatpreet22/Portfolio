import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");
const PROJECTS_DIR = path.join(process.cwd(), "content", "projects");

export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  readingTime: string;
  content: string;
};

export type ProjectStudy = {
  slug: string;
  title: string;
  description: string;
  date: string;
  stack: string[];
  repo?: string;
  live?: string;
  cover?: string;
  readingTime: string;
  content: string;
};

function readMdxFiles(dir: string) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((file) => file.endsWith(".mdx"));
}

function requireField(
  data: Record<string, unknown>,
  field: string,
  file: string
) {
  if (data[field] === undefined || data[field] === null) {
    throw new Error(`Missing required frontmatter field "${field}" in ${file}`);
  }
}

function parsePost(file: string): Post | null {
  const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf8");
  const { data, content } = matter(raw);

  for (const field of ["title", "description", "date"]) {
    requireField(data, field, `content/blog/${file}`);
  }
  if (data.published === false) return null;

  return {
    slug: file.replace(/\.mdx$/, ""),
    title: String(data.title),
    description: String(data.description),
    date: String(data.date),
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    readingTime: readingTime(content).text,
    content,
  };
}

export function getAllPosts(): Post[] {
  return readMdxFiles(BLOG_DIR)
    .map(parsePost)
    .filter((post): post is Post => post !== null)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): Post | null {
  const file = `${slug}.mdx`;
  if (!fs.existsSync(path.join(BLOG_DIR, file))) return null;
  return parsePost(file);
}

function parseProjectStudy(file: string): ProjectStudy | null {
  const raw = fs.readFileSync(path.join(PROJECTS_DIR, file), "utf8");
  const { data, content } = matter(raw);

  for (const field of ["title", "description", "date"]) {
    requireField(data, field, `content/projects/${file}`);
  }
  if (data.published === false) return null;

  return {
    slug: file.replace(/\.mdx$/, ""),
    title: String(data.title),
    description: String(data.description),
    date: String(data.date),
    stack: Array.isArray(data.stack) ? data.stack.map(String) : [],
    repo: data.repo ? String(data.repo) : undefined,
    live: data.live ? String(data.live) : undefined,
    cover: data.cover ? String(data.cover) : undefined,
    readingTime: readingTime(content).text,
    content,
  };
}

export function getAllProjectStudies(): ProjectStudy[] {
  return readMdxFiles(PROJECTS_DIR)
    .map(parseProjectStudy)
    .filter((study): study is ProjectStudy => study !== null);
}

export function getProjectStudyBySlug(slug: string): ProjectStudy | null {
  const file = `${slug}.mdx`;
  if (!fs.existsSync(path.join(PROJECTS_DIR, file))) return null;
  return parseProjectStudy(file);
}

export function formatDate(date: string) {
  return new Date(`${date}T00:00:00`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
