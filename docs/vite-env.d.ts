/// <reference types="vite/client" />

declare module "*.mdx" {
  export const frontmatter: Record<string, any>;
  export const toc: Record<string, any>[];
}
