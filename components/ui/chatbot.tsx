"use client";

import { FormEvent, useEffect, useState } from "react";
import { IconMessageCircle, IconSend, IconX } from "@tabler/icons-react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const STARTER_QUESTIONS = [
  "What did you do at Stikbook?",
  "What technologies do you work with?",
  "Tell me about CodeQuest.",
];

export function PortfolioChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasPoppedIn, setHasPoppedIn] = useState(false);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Ask me about my experience, projects, skills, or education.",
    },
  ]);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsOpen(true);
      setHasPoppedIn(true);
    }, 700);

    return () => window.clearTimeout(timer);
  }, []);

  async function sendMessage(message: string) {
    const trimmedMessage = message.trim();

    if (!trimmedMessage || isLoading) {
      return;
    }

    setMessages((current) => [
      ...current,
      { role: "user", content: trimmedMessage },
    ]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: trimmedMessage }),
      });

      const data = (await response.json()) as { answer?: string; error?: string };

      if (!response.ok) {
        throw new Error(data.error || "Unable to get a response.");
      }

      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          content:
            data.answer ||
            "I don't have that information in Mannat's portfolio data yet.",
        },
      ]);
    } catch (error) {
      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          content:
            error instanceof Error
              ? error.message
              : "Unable to get a response right now.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    void sendMessage(input);
  }

  return (
    <div className="fixed bottom-24 right-4 z-[120] md:bottom-6 md:right-6">
      {isOpen ? (
        <div
          className={`w-[calc(100vw-2rem)] max-w-sm overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-950/95 shadow-2xl backdrop-blur-xl transition-all duration-500 ${
            hasPoppedIn
              ? "translate-y-0 scale-100 opacity-100"
              : "translate-y-4 scale-95 opacity-0"
          }`}
        >
          <div className="flex items-center justify-between border-b border-neutral-800 px-4 py-3">
            <div>
              <p className="text-sm font-semibold text-white">Ask About Me</p>
              <p className="text-xs text-neutral-400">
                Grounded in portfolio data only
              </p>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="rounded-full p-2 text-neutral-400 transition hover:bg-neutral-900 hover:text-white"
              aria-label="Close chatbot"
            >
              <IconX size={18} />
            </button>
          </div>

          <div className="space-y-3 border-b border-neutral-800 px-4 py-4">
            <div className="flex flex-wrap gap-2">
              {STARTER_QUESTIONS.map((question) => (
                <button
                  key={question}
                  type="button"
                  onClick={() => void sendMessage(question)}
                  className="rounded-full border border-neutral-700 px-3 py-1.5 text-left text-xs text-neutral-200 transition hover:border-neutral-500 hover:bg-neutral-900"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>

          <div className="max-h-[24rem] space-y-3 overflow-y-auto px-4 py-4">
            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={`rounded-2xl px-4 py-3 text-sm leading-6 ${
                  message.role === "user"
                    ? "ml-8 bg-gradient-to-r from-pink-500 via-purple-500 to-violet-500 text-white"
                    : "mr-8 border border-neutral-800 bg-neutral-900 text-neutral-100"
                }`}
              >
                {message.content}
              </div>
            ))}

            {isLoading ? (
              <div className="mr-8 rounded-2xl border border-neutral-800 bg-neutral-900 px-4 py-3 text-sm text-neutral-300">
                Thinking...
              </div>
            ) : null}
          </div>

          <form onSubmit={handleSubmit} className="border-t border-neutral-800 p-4">
            <div className="flex items-center gap-2 rounded-2xl border border-neutral-800 bg-neutral-900 px-3 py-2">
              <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Ask about experience, projects, or skills"
                className="w-full bg-transparent text-sm text-white outline-none placeholder:text-neutral-500"
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="rounded-full bg-white p-2 text-black transition disabled:cursor-not-allowed disabled:opacity-50"
                aria-label="Send message"
              >
                <IconSend size={16} />
              </button>
            </div>
          </form>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="flex h-14 w-14 items-center justify-center rounded-full border border-neutral-700 bg-neutral-800 text-neutral-300 shadow-[0_12px_30px_rgba(0,0,0,0.35)] transition hover:scale-105 hover:text-white"
          aria-label="Open chatbot"
        >
          <IconMessageCircle size={24} />
        </button>
      )}
    </div>
  );
}
