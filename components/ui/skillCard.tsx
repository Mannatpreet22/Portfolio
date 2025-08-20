import { cn } from "@/lib/utils";
import {
  IconBoxMultiple,
  IconBrowser,
  IconBulb,
  IconCode,
  IconDatabase,
  IconLayersDifference,
  IconServer,
  IconTerminal2,
} from "@tabler/icons-react";
import { CoverDemo } from "./cover";

export function SkillCard() {
    const features = [
        {
          title: "Full-Stack Development",
          description:
            "Building dynamic web applications using Next.js, React.js, and Express.js with seamless front-to-back integration.",
          icon: <IconTerminal2 />,
        },
        {
          title: "Database Expertise",
          description:
            "Managing and optimizing databases using PostgreSQL, MongoDB, and Oracle for reliable data storage and retrieval.",
          icon: <IconDatabase />,
        },
        {
          title: "Containerization & CI/CD",
          description:
            "Streamlining deployments with Docker, Prisma, and CI/CD pipelines for efficient, scalable applications.",
          icon: <IconLayersDifference />,
        },
        {
          title: "Programming Languages",
          description:
            "Proficient in C, C++, Python, Golang, JavaScript, TypeScript, and SQL for versatile software development.",
          icon: <IconCode />,
        },
        {
          title: "Modern Web Development",
          description:
            "Designing responsive and user-friendly interfaces with Next.js, React.js, and modern frameworks like Tailwind CSS, Shadcn UI, and Framer Motion.",
          icon: <IconBrowser />,
        },
        {
          title: "Object-Oriented Programming",
          description:
            "Implementing OOP principles like inheritance, polymorphism, and encapsulation to create modular and reusable code.",
          icon: <IconBoxMultiple />,
        },
        {
          title: "Backend Development",
          description:
            "RESTful APIs with Node.js & Golang, microservices with nginx, Docker deployment, CI/CD pipelines, AWS & Digital Ocean.",
          icon: <IconServer />,
        },
        {
          title: "Algorithmic Thinking",
          description:
            "Crafting efficient data structures and algorithms to solve complex problems and optimize workflows.",
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
