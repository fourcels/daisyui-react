import { defineConfig } from 'vite'
import { resolve } from 'node:path'
import react from '@vitejs/plugin-react-swc'
import mdx from '@mdx-js/rollup'
import remarkToc from 'remark-toc'
import rehypePrism from '@mapbox/rehype-prism'
import rehypeSlug from 'rehype-slug'


// https://vitejs.dev/config/
export default defineConfig({
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, 'components'),
      formats: ['es'],
    },
    rollupOptions: {
      external: ['react', 'react/jsx-runtime'],
    }
  },
  plugins: [
    mdx({
      remarkPlugins: [remarkToc],
      rehypePlugins: [rehypeSlug],
    }),
    react(),
  ],
})
