import { RouteObject } from "react-router";
import { Content } from "./components/Content";
import { kebabCase } from "lodash";

function docRoutes() {
  const docs = import.meta.glob("./docs/*.mdx");
  const routes: RouteObject[] = [];
  for (const key in docs) {
    if (Object.prototype.hasOwnProperty.call(docs, key)) {
      const loadModule = docs[key];
      const arr = key.split("/");
      const path = kebabCase(arr.pop()!.split(".")[0]);
      routes.push({
        path,
        lazy: async () => {
          const module: any = await loadModule();
          return {
            element: (
              <Content frontmatter={module.frontmatter}>
                <module.default />
              </Content>
            ),
          };
        },
      });
    }
  }
  return routes;
}

function componentRoutes() {
  const components = import.meta.glob("../components/**/*.mdx");
  const routes: RouteObject[] = [
    {
      index: true,
      lazy: () => import("./pages/Component"),
    },
  ];
  for (const key in components) {
    if (Object.prototype.hasOwnProperty.call(components, key)) {
      const loadModule = components[key];
      const arr = key.split("/");
      const path = kebabCase(arr.pop()!.split(".")[0]);
      routes.push({
        path,
        lazy: async () => {
          const module: any = await loadModule();
          return {
            element: (
              <Content frontmatter={module.frontmatter} toc={module.toc}>
                <module.default />
              </Content>
            ),
          };
        },
      });
    }
  }
  return routes;
}

function getRoutes() {
  const routes: RouteObject[] = [
    {
      index: true,
      lazy: () => import("./pages/Home"),
    },
    {
      path: "/docs",
      children: docRoutes(),
    },
    {
      path: "/components",
      children: componentRoutes(),
    },
  ];
  return routes;
}

export const routes = getRoutes();
