
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import { MDXProvider } from '@mdx-js/react'
import { CodePreview } from './components/CodePreview'


import Button, { frontmatter } from '../components/Button/Button.mdx'

console.log(frontmatter)

const router = createBrowserRouter([
  {
    path: "",
    element: (
      <Button />
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
