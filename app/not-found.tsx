import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { buttonClasses } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-5xl flex-col items-start px-6 py-32">
      <p className="font-mono text-sm text-accent">404</p>
      <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
        Page not found
      </h1>
      <p className="mt-3 text-muted-foreground">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <Link href="/" className={`${buttonClasses("outline")} mt-8`}>
        <ArrowLeft className="h-4 w-4" />
        Back home
      </Link>
    </div>
  );
}
