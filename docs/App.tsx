import { RouterProvider, Link, createHashRouter } from "react-router-dom";
import { MDXProvider } from "@mdx-js/react";
import { CodePreview } from "./components/CodePreview";
import "./routes";
import "./App.css";

import { routes } from "./routes";
import { Layout } from "./components/Layout";

const router = createHashRouter([
  {
    Component: Layout,
    path: "/",
    children: routes,
  },
]);

function App() {
  return (
    <MDXProvider components={{ CodePreview, Link }}>
      <RouterProvider router={router} />
    </MDXProvider>
  );
}

export default App;
