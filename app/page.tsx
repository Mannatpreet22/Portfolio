import { Hero } from "@/components/sections/hero";
import { SkillsMarquee } from "@/components/sections/skills-marquee";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { RecentPosts } from "@/components/sections/recent-posts";
import { Contact } from "@/components/sections/contact";
import { site } from "@/lib/data/site";
import { getAllPosts } from "@/lib/mdx";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.role,
  worksFor: {
    "@type": "Organization",
    name: site.company,
  },
  url: site.url,
  email: `mailto:${site.email}`,
  sameAs: [site.socials.github, site.socials.linkedin],
};

export default function Home() {
  const recentPosts = getAllPosts().slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <Hero />
      <SkillsMarquee />
      <FeaturedProjects />
      <RecentPosts posts={recentPosts} />
      <Contact />
    </>
  );
}
