import { RouteObject } from 'react-router';
import { Content } from './components/Content';

const modules = import.meta.glob("/components/**/*.mdx")

function getRoutes() {
  const routes: RouteObject[] = []
  for (const key in modules) {
    if (Object.prototype.hasOwnProperty.call(modules, key)) {
      const element = modules[key]
      const arr = key.split('/')
      const path = (arr.pop()!.split('.')[0]).toLowerCase()
      routes.push({
        path,
        lazy: async () => {
          const module: any = await element()
          return {
            element: (
              <Content frontmatter={module.frontmatter} toc={module.toc}>
                <module.default />
              </Content>
            )
          }
        }
      })
    }
  }
  return routes
}

export const routes = getRoutes()