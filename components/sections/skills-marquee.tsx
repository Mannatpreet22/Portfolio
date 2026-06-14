import { skillGroups } from "@/lib/data/skills";
import { cn } from "@/lib/utils";

const allSkills = skillGroups.flatMap((group) =>
  group.skills.map((skill) => skill.replace(/\s*\(.*\)/, ""))
);

const mid = Math.ceil(allSkills.length / 2);
const rows = [allSkills.slice(0, mid), allSkills.slice(mid)];

function MarqueeRow({
  skills,
  reverse = false,
}: {
  skills: string[];
  reverse?: boolean;
}) {
  return (
    <div className="marquee-row overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
      <div
        className={cn(
          "animate-marquee flex w-max gap-3 pr-3",
          reverse && "[animation-direction:reverse]"
        )}
      >
        {[...skills, ...skills].map((skill, i) => (
          <span
            key={`${skill}-${i}`}
            className="inline-flex shrink-0 items-center rounded-full border border-border bg-card px-4 py-1.5 font-mono text-sm text-muted-foreground transition-colors hover:border-accent hover:text-foreground"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export function SkillsMarquee() {
  return (
    <section
      aria-label="Technologies I work with"
      className="border-y border-border bg-card/50 py-10"
    >
      <div className="space-y-4">
        <MarqueeRow skills={rows[0]} />
        <MarqueeRow skills={rows[1]} reverse />
      </div>
    </section>
  );
}
