import React from 'react'
import { ComponentBaseProps } from '../types'
import { twMerge } from 'tailwind-merge'

export type NavbarStartProps = React.HTMLAttributes<HTMLDivElement> &
    ComponentBaseProps

export const NavbarStart = React.forwardRef<HTMLDivElement, NavbarStartProps>((
    {
        dataTheme,
        className,
        ...props
    },
    ref
) => {
    const classes = twMerge(
        'navbar-start',
        className
    )
    return (
        <div className={classes} data-theme={dataTheme} ref={ref} {...props}></div>
    )
})



NavbarStart.displayName = 'NavbarStart'