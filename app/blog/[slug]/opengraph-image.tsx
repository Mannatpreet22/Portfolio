import { ImageResponse } from "next/og";

import { site } from "@/lib/data/site";
import { formatDate, getPostBySlug } from "@/lib/mdx";

export const alt = "Blog post";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

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
        <div style={{ fontSize: 24, color: "#60a5fa", display: "flex" }}>
          {post ? formatDate(post.date) : "Blog"} · mkhurana.com
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 60,
            fontWeight: 700,
            letterSpacing: "-0.02em",
            lineHeight: 1.15,
            display: "flex",
          }}
        >
          {post?.title ?? "Blog post"}
        </div>
        <div
          style={{
            marginTop: 32,
            fontSize: 26,
            color: "#a1a1a1",
            display: "flex",
          }}
        >
          {site.name}
        </div>
      </div>
    ),
    size
  );
}
