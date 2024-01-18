
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import { MDXProvider } from '@mdx-js/react'
import { CodePreview } from './components/CodePreview'


// import Button, { frontmatter, toc } from '../components/Button/Button.mdx'
import { Layout } from './components/Layout';

const router = createBrowserRouter([
  {
    path: "button",
    lazy: async () => {
      const button = await import('../components/Button/Button.mdx')
      return {
        element: (
          <Layout frontmatter={button.frontmatter} toc={button.toc}>
            <button.default />
          </Layout>
        )
      }
    }
  },
  {
    path: "select",
    lazy: async () => {
      const select = await import('../components/Select/Select.mdx')
      return {
        element: (
          <Layout frontmatter={select.frontmatter} toc={select.toc}>
            <select.default />
          </Layout>
        )
      }
    }
  },
  {
    path: "toggle",
    lazy: async () => {
      const toggle = await import('../components/Toggle/Toggle.mdx')
      return {
        element: (
          <Layout frontmatter={toggle.frontmatter} toc={toggle.toc}>
            <toggle.default />
          </Layout>
        )
      }
    }
  },
]);

function App() {

  return (
    <MDXProvider components={{ CodePreview }}>
      <RouterProvider router={router} />
    </MDXProvider>
  )
}

export default App
