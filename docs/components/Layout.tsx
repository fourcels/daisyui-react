import { twMerge } from 'tailwind-merge';


export function Layout({ children, frontmatter, toc }: {
    children: React.ReactNode;
    frontmatter?: Record<string, string>;
    toc?: Record<string, any>[]
}) {
    return (
        <div className='flex justify-center mx-auto'>
            <article className='prose p-10 max-w-4xl flex-1'>
                {frontmatter?.title && <h1>{frontmatter.title}</h1>}
                {frontmatter?.description && <p>{frontmatter.description}</p>}
                {children}
            </article>
            {toc && (
                <div className='w-64 relative ml-10'>
                    <Toc toc={toc} className='sticky top-10' />
                </div>
            )}
        </div>
    )
}


function Toc({ toc, className }: {
    toc: Record<string, any>[];
    className?: string;
}) {
    return (
        <ul className={twMerge("border-l-2 pl-4", className)}>
            {toc.map((item) => (
                <li key={item.id} className='mb-1'><a href={`#${item.id}`}>{item.title}</a></li>
            ))}
        </ul>
    )
}