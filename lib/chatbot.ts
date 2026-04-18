import { GoogleGenAI } from "@google/genai";
import { readFile } from "fs/promises";
import path from "path";

const CONTENT_DIR = path.join(process.cwd(), "content");

type Section = {
  heading: string;
  content: string;
  score: number;
};

export async function loadChatbotContext() {
  const [systemPrompt, knowledgeBase] = await Promise.all([
    readFile(path.join(CONTENT_DIR, "chatbot-system-prompt.md"), "utf8"),
    readFile(path.join(CONTENT_DIR, "about-me.md"), "utf8"),
  ]);

  return { systemPrompt, knowledgeBase };
}

function normalize(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9\s]/g, " ");
}

function tokenize(text: string) {
  return normalize(text)
    .split(/\s+/)
    .filter((token) => token.length > 2);
}

function splitSections(markdown: string) {
  const parts = markdown.split(/^##\s+/m).filter(Boolean);

  return parts.map((part) => {
    const [headingLine, ...rest] = part.split("\n");
    return {
      heading: headingLine.trim(),
      content: rest.join("\n").trim(),
    };
  });
}

export function selectRelevantContext(question: string, knowledgeBase: string) {
  const questionTokens = tokenize(question);
  const sections = splitSections(knowledgeBase);

  const scoredSections: Section[] = sections
    .map((section) => {
      const haystack = normalize(`${section.heading} ${section.content}`);
      const score = questionTokens.reduce((total, token) => {
        return total + (haystack.includes(token) ? 1 : 0);
      }, 0);

      return { ...section, score };
    })
    .sort((a, b) => b.score - a.score);

  const topSections = scoredSections.filter((section) => section.score > 0).slice(0, 4);
  const fallbackSections = topSections.length > 0 ? topSections : scoredSections.slice(0, 3);

  return fallbackSections
    .map((section) => `## ${section.heading}\n${section.content}`)
    .join("\n\n");
}

export async function generateChatbotAnswer(question: string) {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    throw new Error("Missing GEMINI_API_KEY");
  }

  const { systemPrompt, knowledgeBase } = await loadChatbotContext();
  const context = selectRelevantContext(question, knowledgeBase);

  const ai = new GoogleGenAI({ apiKey });
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash-lite",
    contents: [
      {
        role: "user",
        parts: [
          {
            text: `${systemPrompt}

Portfolio context:
${context}

User question:
${question}`,
          },
        ],
      },
    ],
  });

  return response.text?.trim() || "I don't have that information in my portfolio data yet.";
}
