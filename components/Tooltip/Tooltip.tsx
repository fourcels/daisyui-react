import React, { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

import {
    ComponentBaseProps,
    ComponentColor,
    ComponentPosition,
} from '../types'

export type TooltipProps =
    Omit<React.HTMLAttributes<HTMLDivElement>, 'color'> &
    ComponentBaseProps & {
        title: string
        open?: boolean
        color?: Exclude<ComponentColor, 'neutral' | 'ghost'>
        position?: ComponentPosition
    }

export const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(
    (
        {
            title,
            children,
            open,
            color,
            position,
            dataTheme,
            className,
            ...props
        },
        ref
    ): JSX.Element => {

        const colors = {
            primary: 'tooltip-primary',
            secondary: 'tooltip-secondary',
            accent: 'tooltip-accent',
            info: 'tooltip-info',
            success: 'tooltip-success',
            warning: 'tooltip-warning',
            error: 'tooltip-error',
        }
        const positions = {
            top: 'tooltip-top',
            bottom: 'tooltip-bottom',
            left: 'tooltip-left',
            right: 'tooltip-right',
        }

        const classes = twMerge(
            'tooltip',
            color && colors[color],
            position && positions[position],
            open && 'tooltip-open',
            className,
        )

        return (
            <div
                role="tooltip"
                {...props}
                ref={ref}
                data-theme={dataTheme}
                data-tip={title}
                className={classes}
            >
                {children}
            </div>
        )
    }
)

Tooltip.displayName = 'Tooltip'
