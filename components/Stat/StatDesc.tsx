import { twMerge } from 'tailwind-merge'

import React, { forwardRef } from 'react'

export type StatDescProps = React.HTMLAttributes<HTMLDivElement>

export const StatDesc = forwardRef<HTMLDivElement, StatDescProps>((
    {
        className,
        ...props
    },
    ref
): JSX.Element => {

    const classes = twMerge(
        'stat-desc',
        className,
    )

    return (
        <div className={classes} ref={ref} {...props}>
        </div>
    )
})
StatDesc.displayName = 'StatDesc'
