import { PluginOption } from "vite";
import { read } from "to-vfile";
import { matter } from "vfile-matter";
import { glob } from "glob";
import path from "node:path";
import _ from "lodash";

export function componentMatter(): PluginOption {
  const virtualModuleId = "virtual:component-matter";
  const resolvedVirtualModuleId = "\0" + virtualModuleId;

  return {
    name: "component-matter", // required, will show up in warnings and errors
    resolveId(id) {
      if (id === virtualModuleId) {
        return resolvedVirtualModuleId;
      }
    },
    async load(id) {
      if (id === resolvedVirtualModuleId) {
        const files = await glob("**/*.mdx", {
          cwd: path.join(__dirname, "../components/"),
          absolute: true,
        });
        const matters = await Promise.all(
          files.sort().map(async (item) => {
            const file = await read(item);
            matter(file, { strip: true });
            return {
              slug: _.kebabCase(path.parse(item).name),
              ...(file.data.matter as any),
            };
          })
        );
        return `export const matters = ${JSON.stringify(matters)}`;
      }
    },
  };
}
