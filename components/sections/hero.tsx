"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, FileDown, Github, Linkedin } from "lucide-react";

import { site } from "@/lib/data/site";
import { buttonClasses } from "@/components/ui/button";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" as const },
  },
};

export function Hero() {
  const reduceMotion = useReducedMotion();

  function handleMouseMove(event: React.MouseEvent<HTMLElement>) {
    const el = event.currentTarget;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    el.style.setProperty("--my", `${event.clientY - rect.top}px`);
  }

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden"
    >
      <div aria-hidden className="bg-dots absolute inset-0" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(600px circle at var(--mx, 70%) var(--my, 30%), color-mix(in srgb, var(--accent) 10%, transparent), transparent 60%)",
        }}
      />

      <div className="relative mx-auto grid max-w-5xl items-center gap-12 px-6 pb-16 pt-20 sm:pb-24 sm:pt-24 lg:grid-cols-[1fr_auto]">
        <motion.div
          variants={container}
          initial={reduceMotion ? false : "hidden"}
          animate="show"
        >
          <motion.div
            variants={item}
            className="flex flex-wrap items-center gap-3"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 font-mono text-xs text-muted-foreground">
              <span className="animate-pulse-dot h-2 w-2 rounded-full bg-emerald-400" />
              Open to full-time roles
            </span>
            <span className="font-mono text-sm text-accent">
              {site.role} @ {site.company}
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="text-gradient mt-5 max-w-3xl pb-2 text-4xl font-bold tracking-tight sm:text-6xl"
          >
            {site.name}
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground"
          >
            I build reliable backend systems and cloud infrastructure — Spring
            Boot microservices, event-driven pipelines on AWS, and full-stack
            products with TypeScript. Currently shipping production systems at{" "}
            {site.company}.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Link href="/projects" className={buttonClasses("default")}>
              View projects
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a href={site.resume} download className={buttonClasses("outline")}>
              <FileDown className="h-4 w-4" />
              Resume
            </a>
            <div className="flex items-center gap-1">
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
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
          className="relative mx-auto w-52 sm:w-64 lg:w-72"
        >
          <div
            aria-hidden
            className="absolute inset-4 rounded-full bg-gradient-to-br from-accent via-purple-500 to-cyan-400 opacity-30 blur-3xl"
          />
          <motion.div
            animate={reduceMotion ? undefined : { y: [-7, 7] }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
            className="relative"
          >
            <div
              aria-hidden
              className="absolute bottom-1 left-1/2 h-[88%] w-[88%] -translate-x-1/2 rounded-full bg-gradient-to-br from-accent/40 via-purple-500/30 to-cyan-400/40"
            />
            <Image
              src="/mannatpreet.png"
              alt={`Portrait of ${site.name}`}
              width={288}
              height={288}
              priority
              className="relative drop-shadow-2xl"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
