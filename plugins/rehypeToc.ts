import type { Root } from 'mdast';
import type { VFile } from 'vfile'
import { visit } from 'unist-util-visit'

import { heading } from 'hast-util-heading'
import { hasProperty } from "hast-util-has-property"
import { Node } from 'unist'
import { toString } from "hast-util-to-string"
import { headingRank } from 'hast-util-heading-rank'

import { mdxjs } from 'micromark-extension-mdxjs'
import { fromMarkdown } from 'mdast-util-from-markdown'
import { mdxFromMarkdown } from 'mdast-util-mdx'

export type Toc = {
    title: string;
    id: string;
    rank?: number;
}

export function rehypeToc() {
    return (tree: Root, file: VFile) => {
        const headings: Toc[] = []
        visit(tree, "element", (node: Node) => {
            if (
                heading(node) &&
                hasProperty(node, "id")
            ) {
                headings.push({
                    title: toString(node),
                    id: node.properties.id.toString(),
                    rank: headingRank(node),
                })
            }
        })
        const estree = fromMarkdown(`export const toc = ${JSON.stringify(headings)}`, {
            extensions: [mdxjs()],
            mdastExtensions: [mdxFromMarkdown()]
        })
        tree.children.push(...estree.children)
    }
}
