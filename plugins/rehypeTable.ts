import { Root } from "hast";
import type { VFile } from "vfile";
import { visit } from "unist-util-visit";

export function rehypeTable() {
  return (tree: Root, file: VFile) => {
    visit(tree, { type: "element", tagName: "table" }, (node) => {
      node.properties["className"] = "markdown-table";
    });
  };
}
