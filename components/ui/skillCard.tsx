import { cn } from "@/lib/utils";
import {
  IconBolt,
  IconBulb,
  IconCloud,
  IconCode,
  IconDatabase,
  IconDeviceMobile,
  IconGitBranch,
  IconServer,
} from "@tabler/icons-react";
import { CoverDemo } from "./cover";

export function SkillCard() {
    const features = [
        {
          title: "Mobile Development",
          description:
            "Building performant mobile experiences with React Native, Expo, FlashList, TanStack Query, and production-focused debugging across Android and iOS.",
          icon: <IconDeviceMobile />,
        },
        {
          title: "Backend Microservices",
          description:
            "Designing and improving backend services with Spring Boot, Node.js, REST APIs, Redis caching, and clean service-to-service integrations.",
          icon: <IconServer />,
        },
        {
          title: "Cloud & DevOps",
          description:
            "Working with AWS services like S3, ECS, ECR, Lambda, CloudFront, and CI/CD pipelines to support stable deployments and scalable infrastructure.",
          icon: <IconCloud />,
        },
        {
          title: "Databases & Caching",
          description:
            "Using PostgreSQL, Redis, Cassandra, and SQL-backed data models to build low-latency systems and reliable application workflows.",
          icon: <IconDatabase />,
        },
        {
          title: "Performance Optimization",
          description:
            "Improving app responsiveness by fixing render bottlenecks, reducing redundant calls, stabilizing media playback, and optimizing heavy user flows.",
          icon: <IconBolt />,
        },
        {
          title: "Distributed Systems",
          description:
            "Building systems around queues, async processing, microservice boundaries, event-driven flows, and fault-tolerant integrations.",
          icon: <IconGitBranch />,
        },
        {
          title: "Programming Languages",
          description:
            "Writing production code in TypeScript and Java, with experience in Python, SQL, C, and C++ for both application and systems-oriented work.",
          icon: <IconCode />,
        },
        {
          title: "Product Ownership",
          description:
            "Taking ownership of broken or unfinished features, driving them end to end, and improving reliability in the parts of the product users feel most.",
          icon: <IconBulb />,
        },
      ];
  return (
    <div id="skills">
      <CoverDemo word="Skills" />
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
      
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l border-neutral-800",
        index < 4 && "lg:border-b border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
