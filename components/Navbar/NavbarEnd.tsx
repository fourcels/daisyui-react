import React from 'react'
import { ComponentBaseProps } from '../types'
import { twMerge } from 'tailwind-merge'

export type NavbarEndProps = React.HTMLAttributes<HTMLDivElement> &
    ComponentBaseProps

export const NavbarEnd = React.forwardRef<HTMLDivElement, NavbarEndProps>((
    {
        dataTheme,
        className,
        ...props
    },
    ref
) => {
    const classes = twMerge(
        'navbar-end',
        className
    )
    return (
        <div className={classes} data-theme={dataTheme} ref={ref} {...props}></div>
    )
})



NavbarEnd.displayName = 'NavbarEnd'