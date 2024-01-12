import { defineConfig } from 'vite'
import mdx from '@mdx-js/rollup'
import react from '@vitejs/plugin-react-swc'
import path from 'node:path'
import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'
import rehypeSlug from "rehype-slug";
import { rehypeToc } from './plugins/rehypeToc'
import { remarkCode } from './plugins/rehypeCode'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    mdx({
      remarkPlugins: [
        remarkFrontmatter,
        remarkMdxFrontmatter,
        remarkCode,
      ],
      rehypePlugins: [
        rehypeSlug,
        rehypeToc,
      ],
      providerImportSource: "@mdx-js/react",
    }),
    react(),
  ],
  resolve: {
    alias: {
      "daisyui-react": path.resolve(__dirname, './components')
    }
  }
})
