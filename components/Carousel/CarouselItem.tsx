import { twMerge } from 'tailwind-merge'

import { forwardRef } from 'react'

export type CarouselItemProps = React.HTMLAttributes<HTMLDivElement>
    & {
        width?: 'full' | 'half'
    }

export const CarouselItem = forwardRef<HTMLDivElement, CarouselItemProps>((
    {
        width,
        children,
        className,
        ...props
    },
    ref
): JSX.Element => {

    const widths = {
        full: 'w-full',
        half: 'w-1/2',
    }

    const classes = twMerge(
        'carousel-item',
        width && widths[width],
        className,
    )

    return (
        <div
            {...props}
            className={classes}
            ref={ref}
        >
            {children}
        </div>
    )
}
)
CarouselItem.displayName = 'CarouselItem'
