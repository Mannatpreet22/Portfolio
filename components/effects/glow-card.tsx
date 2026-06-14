"use client";

import { useRef } from "react";

import { cn } from "@/lib/utils";

export function GlowCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--glow-x", `${event.clientX - rect.left}px`);
    el.style.setProperty("--glow-y", `${event.clientY - rect.top}px`);
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className={cn("group/glow relative h-full rounded-lg", className)}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-px z-10 rounded-lg opacity-0 transition-opacity duration-300 group-hover/glow:opacity-100"
        style={{
          background:
            "radial-gradient(450px circle at var(--glow-x, 50%) var(--glow-y, 50%), color-mix(in srgb, var(--accent) 14%, transparent), transparent 45%)",
        }}
      />
      {children}
    </div>
  );
}
