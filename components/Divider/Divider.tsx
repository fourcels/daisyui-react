import { twMerge } from 'tailwind-merge'

import { ComponentBaseProps, ComponentColor } from '../types'
import { forwardRef } from 'react'

export type DividerProps = Omit<React.HTMLAttributes<HTMLDivElement>, 'color'> &
    ComponentBaseProps & {
        vertical?: boolean
        horizontal?: boolean
        responsive?: boolean
        start?: boolean
        end?: boolean
        color?: Exclude<ComponentColor, 'ghost'>
    }

export const Divider = forwardRef<HTMLDivElement, DividerProps>(
    (
        {
            children,
            vertical,
            horizontal,
            responsive,
            color,
            start,
            end,
            dataTheme,
            className,
            ...props
        },
        ref
    ): JSX.Element => {

        const colors = {
            neutral: 'btn-neutral',
            primary: 'btn-primary',
            secondary: 'btn-secondary',
            accent: 'btn-accent',
            info: 'btn-info',
            success: 'btn-success',
            warning: 'btn-warning',
            error: 'btn-error',
        }

        const classes = twMerge(
            'divider',
            className,
            vertical && 'divider-vertical',
            horizontal && 'divider-horizontal',
            responsive && 'lg:divider-horizontal',
            color && colors[color],
            start && 'divider-start',
            end && 'divider-end',
        )

        return (
            <div
                role="separator"
                {...props}
                data-theme={dataTheme}
                className={classes}
                ref={ref}
            >
                {children}
            </div>
        )
    }
)
Divider.displayName = 'Divider'
