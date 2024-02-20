import { twMerge } from 'tailwind-merge'

import React, { ReactElement, forwardRef } from 'react'
import { ComponentBaseProps, ListOrItem } from '../types'


export type CountdownGroupProps = Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>
    & ComponentBaseProps
    & {
        children?: ListOrItem<ReactElement>
        vertical?: boolean
        box?: boolean
    }

export const CountdownGroup = forwardRef<HTMLDivElement, CountdownGroupProps>((
    {
        box,
        vertical,
        children,
        className,
        ...props
    },
    ref
): JSX.Element => {

    const classes = twMerge(
        'countdown-group flex items-center gap-4',
        className,
    )

    return (
        <div ref={ref} className={classes} {...props}>
            {children && React.Children.map(children, (child) => (
                React.cloneElement(child, {
                    vertical,
                    box,
                })
            ))}
        </div>
    )
})
CountdownGroup.displayName = 'CountdownGroup'
