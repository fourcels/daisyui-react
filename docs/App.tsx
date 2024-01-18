
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
]);

function App() {

  return (
    <MDXProvider components={{ CodePreview }}>
      <RouterProvider router={router} />
    </MDXProvider>
  )
}

export default App
