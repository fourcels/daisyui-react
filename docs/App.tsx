import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import { MDXProvider } from "@mdx-js/react";
import { CodePreview } from "./components/CodePreview";
import "./routes";
import "./App.css";

import { routes } from "./routes";
import { Layout } from "./components/Layout";

const { BASE_URL } = import.meta.env;

const router = createBrowserRouter(
  [
    {
      Component: Layout,
      path: "/",
      children: routes,
    },
  ],
  { basename: BASE_URL }
);

function App() {
  return (
    <MDXProvider components={{ CodePreview, Link }}>
      <RouterProvider router={router} />
    </MDXProvider>
  );
}

export default App;
