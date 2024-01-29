import React from 'react'
import { ComponentBaseProps } from '../types'
import { twMerge } from 'tailwind-merge'

export type NavbarCenterProps = React.HTMLAttributes<HTMLDivElement> &
    ComponentBaseProps

export const NavbarCenter = React.forwardRef<HTMLDivElement, NavbarCenterProps>((
    {
        dataTheme,
        className,
        ...props
    },
    ref
) => {
    const classes = twMerge(
        'navbar-center',
        className
    )
    return (
        <div className={classes} data-theme={dataTheme} ref={ref} {...props}></div>
    )
})



NavbarCenter.displayName = 'NavbarCenter'