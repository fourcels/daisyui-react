import { visit } from 'unist-util-visit'
import path from 'node:path'
import fs from 'node:fs'
import type { Root } from 'mdast';
import type { VFile } from 'vfile'
import yaml from 'js-yaml';
import { MdxJsxAttribute, MdxJsxFlowElement } from 'mdast-util-mdx-jsx'
import { mdxjs } from 'micromark-extension-mdxjs'
import { fromMarkdown } from 'mdast-util-from-markdown'
import { mdxFromMarkdown } from 'mdast-util-mdx'

export function remarkCode() {
    return (tree: Root, file: VFile) => {
        visit(tree, 'code', (node, index, parent) => {
            const { code, frontmatter } = parseCodeFrontmatter(node.value)
            const estree = fromMarkdown(`<CodePreview ${node.meta} lang="${node.lang}" code="${btoa(encodeURIComponent(code))}" {...${JSON.stringify(frontmatter)}} />`, {
                extensions: [mdxjs()],
                mdastExtensions: [mdxFromMarkdown()]
            })
            parent.children[index] = estree.children[0]
        })
        visit(tree, { name: 'code' }, (node, index, parent) => {
            let src = getSrc(node.attributes)
            if (!src) {
                return
            }
            src = path.resolve(file.dirname, src)
            if (!fs.existsSync(src)) {
                return
            }
            const lang = path.extname(src).substring(1)
            const estree = fromMarkdown(`<CodePreview live lang="${lang}" loadCode={() => import("${src}?raw")} loadComponent={() => import("${src}")}/>`, {
                extensions: [mdxjs()],
                mdastExtensions: [mdxFromMarkdown()]
            })
            parent.children[index] = estree.children[0]
        })
    }
}

function isMdxJsxAttribute(attr: any): attr is MdxJsxAttribute {
    if (attr.name) {
        return true
    }
    return false
}

function getSrc(attributes: MdxJsxFlowElement['attributes']) {
    for (const attr of attributes) {
        if (isMdxJsxAttribute(attr) && attr.name === 'src') {
            return attr.value as string
        }
    }
}

/**
 * parse frontmatter from code string
 */
export function parseCodeFrontmatter(raw: string) {
    const [, comment = '', code = ''] = raw
        // clear head break lines
        .replace(/^\n\s*/, '')
        // split head comments & remaining code
        .match(/^(\/\*\*[^]*?\n\s*\*\/)?(?:\s|\n)*([^]+)?$/)!;

    const yamlComment = comment
        // clear / from head & foot for comment
        .replace(/^\/|\/$/g, '')
        // remove * from comments
        .replace(/(^|\n)\s*\*+/g, '$1');
    let frontmatter: Record<string, any> | null = null;

    try {
        frontmatter = yaml.load(yamlComment) as any;
    } catch { /* empty */ }
    return { code: frontmatter ? code.trim() : raw.trim(), frontmatter };
}
