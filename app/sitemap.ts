import type { MetadataRoute } from "next";

import { site } from "@/lib/data/site";
import { getAllPosts, getAllProjectStudies } from "@/lib/mdx";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/projects",
    "/blog",
    "/about",
  ].map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date(),
  }));

  const posts: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${site.url}/blog/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  const studies: MetadataRoute.Sitemap = getAllProjectStudies().map(
    (study) => ({
      url: `${site.url}/projects/${study.slug}`,
      lastModified: new Date(study.date),
    })
  );

  return [...staticRoutes, ...posts, ...studies];
}
