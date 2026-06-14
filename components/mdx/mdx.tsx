import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypePrettyCode from "rehype-pretty-code";

import { mdxComponents } from "./mdx-components";

const prettyCodeOptions = {
  theme: {
    dark: "github-dark-default",
    light: "github-light",
  },
  keepBackground: false,
};

export function Mdx({ source }: { source: string }) {
  return (
    <MDXRemote
      source={source}
      components={mdxComponents}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkGfm],
          rehypePlugins: [rehypeSlug, [rehypePrettyCode, prettyCodeOptions]],
        },
      }}
    />
  );
}
