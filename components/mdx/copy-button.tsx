"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

export function CopyButton() {
  const [copied, setCopied] = useState(false);

  function handleCopy(event: React.MouseEvent<HTMLButtonElement>) {
    const figure = event.currentTarget.closest("figure");
    const code = figure?.querySelector("pre code")?.textContent;
    if (!code) return;

    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  }

  return (
    <button
      type="button"
      aria-label="Copy code"
      onClick={handleCopy}
      className="absolute right-2 top-2 z-10 inline-flex h-8 w-8 items-center justify-center rounded-md border border-border bg-background/80 text-muted-foreground opacity-0 backdrop-blur transition-opacity hover:text-foreground focus-visible:opacity-100 group-hover:opacity-100"
    >
      {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
    </button>
  );
}
