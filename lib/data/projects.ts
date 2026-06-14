import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    slug: "codequest",
    title: "CodeQuest",
    description:
      "Competitive programming platform with a scalable code execution pipeline — API → Redis queue → worker → Judge0 → PostgreSQL — for reliable concurrent submissions and real-time result streaming.",
    stack: [
      "Next.js",
      "TypeScript",
      "Express",
      "Redis",
      "PostgreSQL",
      "Docker",
      "Judge0",
      "Turborepo",
    ],
    live: "https://codequest.mkhurana.com",
    image: "/codequest.png",
    featured: true,
    caseStudy: true,
  },
  {
    slug: "paybuddy",
    title: "Paybuddy",
    description:
      "Wallet application with bank on-ramp flows via a mock bank server and webhook-based transaction confirmation, plus a merchant portal for payments, inventory, and sales monitoring.",
    stack: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Docker",
      "Turborepo",
      "CI/CD",
    ],
    repo: "https://github.com/Mannatpreet22/Paybuddy",
    image: "/paybuddy.png",
    featured: true,
    caseStudy: true,
  },
  {
    slug: "stylera",
    title: "Stylera",
    description:
      "Wardrobe recommendation platform with a React Native frontend and a polyglot microservices backend — Java services for user and wardrobe data, a Python ML service for outfit recommendations.",
    stack: [
      "React Native",
      "Java",
      "TypeScript",
      "Python",
      "Microservices",
      "PostgreSQL",
      "Docker",
    ],
    featured: true,
    caseStudy: true,
  },
  {
    slug: "exchange-application",
    title: "Exchange Application",
    description:
      "Cryptocurrency trading platform simulation with live dashboards, trading interfaces, and order management.",
    stack: ["Next.js", "TypeScript", "Node.js"],
    repo: "https://github.com/Mannatpreet22/Exchange-Application",
    image: "/exchange-application.png",
    featured: false,
    caseStudy: false,
  },
  {
    slug: "blogging-website",
    title: "Blogging Website",
    description:
      "Medium-style blogging platform with auth, post creation, and a serverless backend on Cloudflare Workers.",
    stack: ["React", "TypeScript", "Hono", "Prisma", "PostgreSQL"],
    live: "https://blogs.mkhurana.com",
    image: "/blogging-website.png",
    featured: false,
    caseStudy: false,
  },
  {
    slug: "http-server",
    title: "HTTP Server from Scratch",
    description:
      "HTTP/1.1 server built from raw TCP sockets in Go — request parsing, routing, and concurrent connection handling without frameworks.",
    stack: ["Go", "TCP", "Networking"],
    repo: "https://github.com/Mannatpreet22/Build-your-own-HTTP-Server",
    image: "/http-server.png",
    featured: false,
    caseStudy: false,
  },
  {
    slug: "assembly-line-simulator",
    title: "Assembly Line Simulator",
    description:
      "Object-oriented simulation of a multi-station assembly line processing customer orders in C++.",
    stack: ["C++", "OOP", "STL"],
    repo: "https://github.com/Mannatpreet22/Assembly-Line-Simulator",
    image: "/assembly-line-simulator.png",
    featured: false,
    caseStudy: false,
  },
  {
    slug: "electrocharge",
    title: "Electro-Charge",
    description:
      "EV charging station finder with interactive maps and station availability details.",
    stack: ["React", "JavaScript", "Maps API"],
    repo: "https://github.com/Mannatpreet22/Electro-Charge",
    image: "/electrocharge.png",
    featured: false,
    caseStudy: false,
  },
  {
    slug: "lego-sets",
    title: "Lego Sets Explorer",
    description:
      "Full-stack catalog app for browsing and managing Lego sets with auth and server-rendered views.",
    stack: ["Node.js", "Express", "EJS", "PostgreSQL", "MongoDB"],
    live: "https://legosets.mkhurana.com",
    image: "/lego-sets.png",
    featured: false,
    caseStudy: false,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
