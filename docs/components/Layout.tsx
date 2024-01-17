import { useEffect, useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { throttle } from 'lodash'


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
                <div className='hidden md:block w-64 relative ml-10'>
                    <Toc toc={toc} className='sticky top-10' />
                </div>
            )}
        </div>
    )
}

export type AnchorContainer = HTMLElement | Window;

function getOffsetTop(element: HTMLElement, container: AnchorContainer): number {
    if (!element.getClientRects().length) {
        return 0;
    }

    const rect = element.getBoundingClientRect();

    if (rect.width || rect.height) {
        if (container === window) {
            container = element.ownerDocument!.documentElement!;
            return rect.top - container.clientTop;
        }
        return rect.top - (container as HTMLElement).getBoundingClientRect().top;
    }

    return rect.top;
}



function Toc({ toc, className }: {
    toc: Record<string, any>[];
    className?: string;
}) {
    const [active, setActive] = useState(0)

    const timer = useRef(0)
    const animate = useRef(false)

    const setActiveAnchor = (idx: number, id: string) => {
        setActive(idx)
        history.replaceState(null, document.title, `#${id}`)
    }


    useEffect(() => {
        const elems = toc.map((item) => {
            return document.getElementById(item.id)!
        })
        const handleScroll = throttle(() => {
            if (animate.current) {
                return
            }
            for (let i = 0; i < elems.length; i++) {
                const elem = elems[i]
                const elemTop = getOffsetTop(elem, window)
                if (elemTop + 100 > 0) {
                    setActiveAnchor(i, elem.id)
                    break
                }
            }
        }, 200)
        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <ul className={className}>
            {toc.map((item, idx) => (
                <li key={item.id} className={twMerge('border-l-2 pl-4 py-0.5', active === idx && 'border-primary')}>
                    <a
                        href={`#${item.id}`}
                        onClick={(e) => {
                            e.preventDefault()
                            setActiveAnchor(idx, item.id)
                            const elem = document.getElementById(item.id)
                            elem?.scrollIntoView({
                                behavior: 'smooth'
                            })
                            animate.current = true
                            clearTimeout(timer.current)
                            timer.current = window.setTimeout(() => {
                                animate.current = false
                            }, 1000);
                        }}
                    >
                        {item.title}
                    </a>
                </li>
            ))}
        </ul>
    )
}