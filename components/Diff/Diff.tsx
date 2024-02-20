import { twMerge } from 'tailwind-merge'

import React, { forwardRef } from 'react'
import { ComponentBaseProps } from '../types'


export type DiffProps = React.HTMLAttributes<HTMLDivElement>
    & ComponentBaseProps
    & {
        items: [React.ReactNode, React.ReactNode]
    }


export const Diff = forwardRef<HTMLDivElement, DiffProps>((
    {
        items,
        dataTheme,
        className,
        ...props
    },
    ref
): JSX.Element => {

    const classes = twMerge(
        'diff',
        className,
    )

    return (
        <div className={classes} ref={ref} data-theme={dataTheme} {...props}>
            <div className='diff-item-1'>{items[0]}</div>
            <div className='diff-item-2'>{items[1]}</div>
            <div className='diff-resizer'></div>
        </div>
    )
})
Diff.displayName = 'Diff'