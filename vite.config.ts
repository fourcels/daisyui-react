/// <reference types="vitest" />
import { defineConfig } from "vite";
import mdx from "@mdx-js/rollup";
import react from "@vitejs/plugin-react-swc";
import path from "node:path";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkGfm from "remark-gfm";

import { rehypeToc } from "./plugins/rehypeToc";
import { remarkCode } from "./plugins/remarkCode";
import { rehypeTable } from "./plugins/rehypeTable";
import { remarkLink } from "./plugins/remarkLink";
import { componentMatter } from "./plugins/componentMatter";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/daisyui-react/",
  plugins: [
    mdx({
      remarkPlugins: [
        remarkFrontmatter,
        remarkMdxFrontmatter,
        remarkGfm,
        remarkCode,
        remarkLink,
      ],
      rehypePlugins: [
        rehypeSlug,
        rehypeAutolinkHeadings,
        rehypeToc,
        rehypeTable,
      ],
      providerImportSource: "@mdx-js/react",
    }),
    react(),
    componentMatter(),
  ],
  resolve: {
    alias: {
      "daisyui-react": path.resolve(__dirname, "./components"),
    },
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./test/setup.ts",
  },
});
