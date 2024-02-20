import { twMerge } from 'tailwind-merge'

import React, { forwardRef } from 'react'
import { ComponentBaseProps } from '../types'


export type KbdProps = React.HTMLAttributes<HTMLElement>
    & ComponentBaseProps


export const Kbd = forwardRef<HTMLElement, KbdProps>((
    {
        dataTheme,
        className,
        ...props
    },
    ref
): JSX.Element => {

    const classes = twMerge(
        'kbd',
        className,
    )

    return (
        <kbd className={classes} ref={ref} data-theme={dataTheme} {...props}>
        </kbd>
    )
})
Kbd.displayName = 'Kbd'