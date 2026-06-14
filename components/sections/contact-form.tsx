"use client";

import { useState } from "react";
import { Loader2, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type Status =
  | { state: "idle" }
  | { state: "submitting" }
  | { state: "success" }
  | { state: "error"; message: string };

export function ContactForm() {
  const [status, setStatus] = useState<Status>({ state: "idle" });

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus({ state: "submitting" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstname: formData.get("firstname"),
          lastname: formData.get("lastname"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
      });

      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as {
          message?: string;
        } | null;
        throw new Error(data?.message ?? "Something went wrong.");
      }

      setStatus({ state: "success" });
      form.reset();
    } catch (error) {
      setStatus({
        state: "error",
        message:
          error instanceof Error ? error.message : "Something went wrong.",
      });
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="firstname"
            className="mb-1.5 block text-sm font-medium"
          >
            First name
          </label>
          <Input
            id="firstname"
            name="firstname"
            placeholder="Jane"
            required
            autoComplete="given-name"
          />
        </div>
        <div>
          <label
            htmlFor="lastname"
            className="mb-1.5 block text-sm font-medium"
          >
            Last name
          </label>
          <Input
            id="lastname"
            name="lastname"
            placeholder="Doe"
            autoComplete="family-name"
          />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
          Email
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="jane@example.com"
          required
          autoComplete="email"
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
          Message
        </label>
        <Textarea
          id="message"
          name="message"
          placeholder="Hi Mannat, I'd like to talk about..."
          required
        />
      </div>

      <div className="flex items-center gap-4">
        <Button type="submit" disabled={status.state === "submitting"}>
          {status.state === "submitting" ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Send className="h-4 w-4" />
          )}
          Send message
        </Button>
        <p role="status" aria-live="polite" className="text-sm">
          {status.state === "success" && (
            <span className="text-accent">
              Message sent — I&apos;ll get back to you soon.
            </span>
          )}
          {status.state === "error" && (
            <span className="text-red-500">{status.message}</span>
          )}
        </p>
      </div>
    </form>
  );
}
