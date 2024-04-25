import { RouteObject } from "react-router";
import { Content } from "./components/Content";
import { kebabCase } from "lodash";

const components = import.meta.glob("/components/**/*.mdx");
const docs = import.meta.glob("./docs/*.mdx");

function getRoutes() {
  const routes: RouteObject[] = [];
  for (const key in docs) {
    if (Object.prototype.hasOwnProperty.call(docs, key)) {
      const loadModule = docs[key];
      const arr = key.split("/");
      const path = kebabCase(arr.pop()!.split(".")[0]);
      routes.push({
        path: `/docs/${path}`,
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
  for (const key in components) {
    if (Object.prototype.hasOwnProperty.call(components, key)) {
      const loadModule = components[key];
      const arr = key.split("/");
      const path = kebabCase(arr.pop()!.split(".")[0]);
      routes.push({
        path: `/components/${path}`,
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

export const routes = getRoutes();
