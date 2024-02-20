import { twMerge } from 'tailwind-merge'

import { ComponentBaseProps, ListOrItem } from '../types'
import React, { ReactElement, forwardRef } from 'react'
import { CarouselItem, CarouselItemProps } from './CarouselItem'
import { Button } from '../Button'
import './Carousel.css'

export type { CarouselItemProps }

export type CarouselProps = Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>
    & ComponentBaseProps
    & {
        children?: ListOrItem<ReactElement<React.ComponentProps<typeof CarouselItem>>>
        snap?: 'start' | 'center' | 'end'
        vertical?: boolean
        width?: CarouselItemProps['width']
        bleed?: boolean
        indicator?: boolean
        actions?: boolean
        contentClassName?: string
        wrapperClassName?: string
    }

const CarouselInner = forwardRef<HTMLDivElement, CarouselProps>((
    {
        contentClassName,
        wrapperClassName,
        actions,
        indicator,
        bleed,
        vertical,
        width,
        snap,
        children,
        dataTheme,
        className,
        ...props
    },
    ref
): JSX.Element => {

    const carouselRef = React.useRef<HTMLDivElement>(null)
    const childRefs = React.useRef<HTMLDivElement[]>([])
    const [active, setActive] = React.useState(0)

    React.useImperativeHandle(ref, () => carouselRef.current!)
    React.useEffect(() => {
        const elem = carouselRef.current!
        function handleScroll() {
            const items = childRefs.current
            for (let i = 0; i < items.length; i++) {
                const item = items[i]
                if (item.offsetLeft >= elem.scrollLeft && item.offsetTop >= elem.scrollTop) {
                    setActive(i)
                    break
                }

            }
        }
        elem?.addEventListener('scrollend', handleScroll)
        return () => {
            elem?.removeEventListener('scrollend', handleScroll)
        }
    }, [])

    const handleActive = (idx: number) => {
        const elem = childRefs.current[idx]
        carouselRef.current?.scrollTo(elem.offsetLeft, elem.offsetTop)
    }

    const snaps = {
        'start': 'carousel-start',
        'center': 'carousel-center',
        'end': 'carousel-end',
    }


    const classes = twMerge(
        'carousel rounded-box relative',
        snap && snaps[snap],
        vertical && 'carousel-vertical',
        bleed && 'space-x-4',
        className,
    )



    return (
        <div className={twMerge(
            'carousel-wrapper',
            wrapperClassName,
        )}>
            <div className={twMerge(
                'carousel-content',
                bleed && 'p-4 bg-neutral rounded-box',
                contentClassName,
            )}>
                <div
                    {...props}
                    data-theme={dataTheme}
                    className={classes}
                    ref={carouselRef}
                >
                    {children && React.Children.map(children, (child, idx) => {
                        return React.cloneElement(child, {
                            width,
                            ref: (el: HTMLDivElement) => childRefs.current[idx] = el,
                        })
                    })}
                </div>
                {actions && (
                    <Actions
                        active={active}
                        count={React.Children.count(children)}
                        onClick={handleActive}
                    />
                )}
            </div>
            {indicator && (
                <Indicator
                    active={active}
                    count={React.Children.count(children)}
                    onClick={handleActive}
                />
            )}
        </div>
    )
})
CarouselInner.displayName = 'Carousel'

function Actions({
    active,
    count,
    onClick,
}: {
    active: number
    count: number
    onClick?: (idx: number) => void
}) {
    if (count <= 1) {
        return null
    }

    return (
        <>
            <Button
                disabled={active === 0}
                className='carousel-prev'
                shape='circle'
                onClick={() => {
                    onClick?.(active - 1)
                }}
            >❮</Button>
            <Button
                disabled={count - 1 === active}
                className='carousel-next'
                shape='circle'
                onClick={() => {
                    onClick?.(active + 1)
                }}
            >❯</Button>
        </>
    )
}


function Indicator({
    count,
    active,
    onClick,
}: {
    count: number
    active: number
    onClick?: (idx: number) => void
}) {
    if (count === 0) {
        return null
    }
    return (
        <div className='flex justify-center w-full py-2 gap-2'>
            {Array.from({ length: count }, (_, idx) => {
                return (
                    <Button
                        key={idx}
                        size="xs"
                        active={active === idx}
                        onClick={() => {
                            onClick?.(idx)
                        }}
                    >
                        {idx + 1}
                    </Button>
                )
            })}
        </div>
    )
}

export const Carousel = Object.assign(CarouselInner, {
    Item: CarouselItem
})