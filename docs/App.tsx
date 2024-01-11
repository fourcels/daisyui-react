
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import { MDXProvider } from '@mdx-js/react'
import { CodePreview } from './components/CodePreview'


import Button, { frontmatter } from '../components/Button/Button.mdx'
import { Layout } from './components/Layout';

const router = createBrowserRouter([
  {
    path: "",
    element: (
      <Layout frontmatter={frontmatter}>
        <Button />
      </Layout>
    ),
  }
]);

function App() {

  return (
    <MDXProvider components={{ CodePreview }}>
      <RouterProvider router={router} />
    </MDXProvider>
  )
}

export default App
