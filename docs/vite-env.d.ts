/// <reference types="vite/client" />

declare module "*.mdx" {
  export const frontmatter: Record<string, any>;
  export const toc: Record<string, any>[];
}

declare module "virtual:component-matter" {
  type Matter = {
    title: string;
    description: string;
    slug: string;
  };
  export const matters: Matter[];
}
