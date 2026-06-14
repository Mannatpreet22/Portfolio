import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

import { getClientIp, rateLimit } from "@/lib/rate-limit";

interface ContactFormData {
  firstname: string;
  lastname?: string;
  email: string;
  message: string;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: NextRequest) {
  try {
    if (!rateLimit(`contact:${getClientIp(request)}`, 5)) {
      return NextResponse.json(
        { message: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const { firstname, lastname, email, message } =
      (await request.json()) as ContactFormData;

    if (!firstname || !email || !message) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const safeName = `${escapeHtml(firstname)} ${escapeHtml(lastname ?? "")}`.trim();

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      replyTo: email,
      to: process.env.EMAIL_TO ?? process.env.EMAIL_USER,
      subject: `New contact form submission from ${firstname} ${lastname ?? ""}`,
      text: `From: ${firstname} ${lastname ?? ""} (${email})\n\n${message}`,
      html: `
        <p><strong>From:</strong> ${safeName} (${escapeHtml(email)})</p>
        <p><strong>Message:</strong> ${escapeHtml(message)}</p>
      `,
    });

    return NextResponse.json(
      { message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
