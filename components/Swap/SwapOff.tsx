import { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

export type SwapOffProps = React.HTMLAttributes<HTMLDivElement>

export const SwapOff = forwardRef<HTMLDivElement, SwapOffProps>((
    {
        className,
        ...props
    },
    ref
) => {
    const classes = twMerge(
        'swap-off',
        className,
    )

    return (
        <div ref={ref} className={classes} {...props}></div>
    )
})

SwapOff.displayName = 'SwapOff'