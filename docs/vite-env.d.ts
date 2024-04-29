/// <reference types="vite/client" />

declare module "*.mdx" {
  export const frontmatter: Record<string, any>;
  export const toc: Record<string, any>[];
}

declare module "virtual:component-matter" {
  export const matters: Record<string, string>[];
}
