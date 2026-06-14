import type { SkillGroup } from "@/lib/types";

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    skills: ["TypeScript", "Java", "Python", "SQL", "C++"],
  },
  {
    label: "Backend & Systems",
    skills: [
      "Spring Boot",
      "Node.js",
      "Express",
      "Microservices",
      "REST APIs",
      "Event-driven Architecture",
    ],
  },
  {
    label: "Cloud & DevOps",
    skills: [
      "AWS (ECS, Lambda, S3, CloudFront, EventBridge, SES)",
      "Docker",
      "Kubernetes",
      "CI/CD",
    ],
  },
  {
    label: "Observability & Reliability",
    skills: [
      "AWS CloudWatch",
      "Grafana",
      "Incident Response",
      "Production Debugging",
    ],
  },
  {
    label: "Databases & Messaging",
    skills: ["PostgreSQL", "Redis", "Kafka", "SQS", "Cassandra"],
  },
  {
    label: "Frontend & Mobile",
    skills: ["React", "Next.js", "React Native", "GraphQL", "Tailwind CSS"],
  },
  {
    label: "AI & ML",
    skills: ["GPT-4o", "Gemini", "LLM Integration", "Inference Pipelines"],
  },
];
