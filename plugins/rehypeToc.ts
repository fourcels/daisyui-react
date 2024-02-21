import { Root, RootContent } from "hast";
import { visit } from "unist-util-visit";

import { heading } from "hast-util-heading";
import { hasProperty } from "hast-util-has-property";
import { toString } from "hast-util-to-string";
import { headingRank } from "hast-util-heading-rank";

import { mdxjs } from "micromark-extension-mdxjs";
import { fromMarkdown } from "mdast-util-from-markdown";
import { mdxFromMarkdown } from "mdast-util-mdx";

export type Toc = {
  title: string;
  id: string;
  rank?: number;
};

export function rehypeToc() {
  return (tree: Root) => {
    const headings: Toc[] = [];
    visit(tree, "element", (node) => {
      if (heading(node) && hasProperty(node, "id")) {
        headings.push({
          title: toString(node),
          id: node.properties.id.toString(),
          rank: headingRank(node),
        });
      }
    });
    const mdast = fromMarkdown(
      `export const toc = ${JSON.stringify(headings)}`,
      {
        extensions: [mdxjs()],
        mdastExtensions: [mdxFromMarkdown()],
      }
    );
    tree.children.unshift(...(mdast.children as RootContent[]));
  };
}
