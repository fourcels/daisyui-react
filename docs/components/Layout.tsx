import { useState } from 'react';
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
    const [active, setActive] = useState(0)

    const activeClass = 'before:absolute before:-left-0.5 before:top-0 before:w-0.5 before:h-full before:bg-primary'

    return (
        <ul className={className}>
            {toc.map((item, idx) => (
                <li key={item.id} className={twMerge('border-l-2 pl-4 py-0.5 relative', active === idx && activeClass)}>
                    <a
                        href={`#${item.id}`}
                        onClick={(e) => {
                            e.preventDefault()
                            setActive(idx)
                            const elem = document.getElementById(item.id)
                            elem?.scrollIntoView({
                                behavior: 'smooth'
                            })
                            history.replaceState(null, document.title, item.id)
                        }}
                    >
                        {item.title}
                    </a>
                </li>
            ))}
        </ul>
    )
}