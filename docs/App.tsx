import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { MDXProvider } from '@mdx-js/react'
import { CodePreview } from './components/CodePreview'
import './routes'
import './App.css'


import { routes } from './routes';
import { Layout } from './components/Layout';

const router = createBrowserRouter([
  {
    Component: Layout,
    children: [
      {
        path: "components",
        children: routes
      },
    ]
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
