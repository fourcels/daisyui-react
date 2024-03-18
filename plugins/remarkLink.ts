import { visit } from "unist-util-visit";
import type { Root } from "mdast";
import type { VFile } from "vfile";
import { fromMarkdown } from "mdast-util-from-markdown";
import { mdxjs } from "micromark-extension-mdxjs";
import { MdxJsxFlowElement, mdxFromMarkdown } from "mdast-util-mdx";

export function remarkLink() {
  return (tree: Root, file: VFile) => {
    visit(tree, "link", (node, index, parent) => {
      const estree = fromMarkdown(`<Link to="${node.url}"></Link>`, {
        extensions: [mdxjs()],
        mdastExtensions: [mdxFromMarkdown()],
      });
      const link = estree.children[0] as MdxJsxFlowElement;
      link.children = node.children as MdxJsxFlowElement["children"];
      parent.children[index] = link;
    });
  };
}
