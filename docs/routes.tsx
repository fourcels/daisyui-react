import { RouteObject } from 'react-router';
import { Content } from './components/Content';
import { kebabCase } from 'lodash'

const modules = import.meta.glob("/components/**/*.mdx")

function getRoutes() {
  const routes: RouteObject[] = []
  for (const key in modules) {
    if (Object.prototype.hasOwnProperty.call(modules, key)) {
      const element = modules[key]
      const arr = key.split('/')
      const path = kebabCase((arr.pop()!.split('.')[0]))
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