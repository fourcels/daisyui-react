import React, { Children, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

import { ComponentBaseProps, ComponentPosition } from '../types'

export type DropdownProps<T extends HTMLElement = HTMLDivElement> =
    React.HTMLAttributes<T> &
    ComponentBaseProps & {
        trigger: React.ReactElement
        position?: ComponentPosition
        end?: boolean
        hover?: boolean
        open?: boolean
    }


export const Dropdown = React.forwardRef<HTMLDivElement, DropdownProps>((
    {
        children,
        trigger,
        position,
        hover,
        end,
        dataTheme,
        className,
        ...props
    },
    ref,
) => {

    const positions = {
        top: 'dropdown-top',
        bottom: 'dropdown-bottom',
        left: 'dropdown-left',
        right: 'dropdown-right',
    }


    const classes = twMerge(
        'dropdown',
        position && positions[position],
        end && 'dropdown-end',
        hover && 'dropdown-hover',
        className,
    )

    return (
        <div
            {...props}
            ref={ref}
            data-theme={dataTheme}
            className={classes}
        >
            {React.cloneElement(trigger, {
                tabIndex: 0
            })}
            <div tabIndex={0} className='dropdown-content z-[10] shadow'>
                {children}
            </div>
        </div>
    )
})

Dropdown.displayName = "Dropdown"
