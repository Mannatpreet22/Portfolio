import { ImageResponse } from "next/og";

import { site } from "@/lib/data/site";

export const runtime = "edge";
export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#0a0a0a",
          color: "#ededed",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 28, color: "#60a5fa", display: "flex" }}>
          {site.role} @ {site.company}
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 72,
            fontWeight: 700,
            letterSpacing: "-0.02em",
            display: "flex",
          }}
        >
          {site.name}
        </div>
        <div
          style={{
            marginTop: 32,
            fontSize: 28,
            color: "#a1a1a1",
            display: "flex",
          }}
        >
          mkhurana.com
        </div>
      </div>
    ),
    size
  );
}
