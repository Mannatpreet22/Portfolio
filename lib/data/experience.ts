import type { Education, Experience } from "@/lib/types";

export const experience: Experience[] = [
  {
    company: "Stikbook INC",
    role: "Software Engineer",
    start: "Apr 2026",
    end: "Present",
    highlights: [
      "Instrumented backend services with AWS CloudWatch alarms, dashboards, and Grafana; act as a first responder for production incidents — triaging alerts, debugging root causes across microservices, and shipping fixes to restore service health.",
      "Built a geo-based offers feature end-to-end — users discover nearby offers on an interactive map and redeem via dynamically generated QR codes; architected the backend with Spring Boot and PostgreSQL with geospatial indexing for low-latency proximity queries.",
      "Engineered an AI content moderation service in Python using multi-threading, GPT-4o for text/image moderation, and a Gemini audio model — filtering harmful content asynchronously without blocking user-facing upload flows.",
    ],
    stack: [
      "Spring Boot",
      "PostgreSQL",
      "AWS",
      "CloudWatch",
      "Grafana",
      "Python",
      "Redis",
    ],
  },
  {
    company: "Stikbook INC",
    role: "Software Developer Intern",
    start: "Jan 2026",
    end: "Apr 2026",
    highlights: [
      "Built a fault-tolerant media upload pipeline using S3 multipart upload, ECS, Lambda, and CloudFront — reducing upload failures by ~30% and cutting AWS costs by $1,000/month.",
      "Designed and built core social features including feed APIs and like/unlike interactions using Spring Boot microservices, Redis, and PostgreSQL, serving ~10K users in production.",
      "Engineered a user rewards microservice integrated across multiple backend services, leveraging Redis caching for reliable low-latency reward processing.",
    ],
    stack: [
      "Spring Boot",
      "Redis",
      "PostgreSQL",
      "AWS S3",
      "ECS",
      "Lambda",
      "CloudFront",
    ],
  },
];

export const education: Education[] = [
  {
    school: "Seneca Polytechnic",
    program: "Computer Programming and Analysis — Advanced Diploma",
    start: "2023",
    end: "2026",
    details: [
      "GPA: 3.9",
      "Relevant coursework: Data Structures & Algorithms, Operating Systems, Cloud Computing (AWS), OOP, Database Management, Software Testing, Web Development.",
    ],
  },
];
