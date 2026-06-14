"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Loader2, MessageCircle, Send, X } from "lucide-react";

import { site } from "@/lib/data/site";
import { cn } from "@/lib/utils";

type ChatMessage = {
  role: "user" | "assistant";
  text: string;
};

const INITIAL_MESSAGE: ChatMessage = {
  role: "assistant",
  text: `Hi! I'm ${site.shortName}'s portfolio assistant. Ask me about his experience, projects, or skills.`,
};

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight });
  }, [messages, open]);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    if (open) window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const message = input.trim();
    if (!message || loading) return;

    setMessages((prev) => [...prev, { role: "user", text: message }]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });
      const data = (await res.json()) as { answer?: string; error?: string };

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text:
            data.answer ??
            data.error ??
            "Something went wrong. Please try again.",
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: "Something went wrong. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <button
        type="button"
        aria-label={open ? "Close chat" : "Open chat"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-5 right-5 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        {open ? <X className="h-5 w-5" /> : <MessageCircle className="h-5 w-5" />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            aria-label="Portfolio chat"
            initial={reduceMotion ? false : { opacity: 0, y: 12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="fixed bottom-20 right-5 z-50 flex h-[28rem] w-[calc(100vw-2.5rem)] max-w-sm flex-col overflow-hidden rounded-lg border border-border bg-background shadow-xl"
          >
            <div className="border-b border-border bg-card px-4 py-3">
              <p className="text-sm font-semibold">Chat with my portfolio</p>
              <p className="text-xs text-muted-foreground">
                Powered by Gemini — answers from my real experience
              </p>
            </div>

            <div
              ref={listRef}
              className="flex-1 space-y-3 overflow-y-auto p-4"
            >
              {messages.map((message, i) => (
                <div
                  key={i}
                  className={cn(
                    "max-w-[85%] rounded-lg px-3 py-2 text-sm leading-relaxed",
                    message.role === "user"
                      ? "ml-auto bg-accent text-accent-foreground"
                      : "bg-muted text-foreground"
                  )}
                >
                  {message.text}
                </div>
              ))}
              {loading && (
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Loader2 className="h-3.5 w-3.5 animate-spin" />
                  Thinking…
                </div>
              )}
            </div>

            <form
              onSubmit={handleSubmit}
              className="flex items-center gap-2 border-t border-border p-3"
            >
              <label htmlFor="chat-input" className="sr-only">
                Your question
              </label>
              <input
                id="chat-input"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about my experience…"
                maxLength={500}
                className="h-9 flex-1 rounded-md border border-border bg-background px-3 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              />
              <button
                type="submit"
                aria-label="Send message"
                disabled={loading || !input.trim()}
                className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-accent text-accent-foreground transition-opacity hover:opacity-90 disabled:opacity-50"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
