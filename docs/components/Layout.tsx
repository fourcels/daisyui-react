

export function Layout({ children, frontmatter }: {
    children: React.ReactNode;
    frontmatter?: Record<string, string>
}) {
    return (
        <article className='prose mx-auto p-10 max-w-4xl'>
            {frontmatter?.title && <h1>{frontmatter.title}</h1>}
            {frontmatter?.description && <p>{frontmatter.description}</p>}
            {children}
        </article>
    )
}