import { twMerge } from 'tailwind-merge'

import React, { forwardRef } from 'react'
import { ComponentBaseProps } from '../types'
import { CountdownGroup, CountdownGroupProps } from './CountdownGroup'

export type { CountdownGroupProps }

export type CountdownProps = Omit<React.HTMLAttributes<HTMLSpanElement>, 'value'>
    & ComponentBaseProps
    & {
        value?: number
        vertical?: boolean
        box?: boolean
        wrapperClassName?: string
    }

const CountdownInner = forwardRef<HTMLSpanElement, CountdownProps>((
    {
        box,
        vertical,
        value = 0,
        children,
        className,
        wrapperClassName,
        dataTheme,
        ...props
    },
    ref
): JSX.Element => {

    const classes = twMerge(
        'countdown font-mono',
        className,
    )

    return (
        <div
            className={twMerge(
                'countdown-wrapper text-center',
                vertical && 'flex flex-col',
                box && 'p-2 bg-neutral rounded-box text-neutral-content',
                wrapperClassName,
            )}
            data-theme={dataTheme}
        >
            <span ref={ref} className={classes} {...props}>
                <span style={{ "--value": value } as React.CSSProperties}></span>
            </span>
            {children}
        </div>
    )
})
CountdownInner.displayName = 'Countdown'

export const Countdown = Object.assign(CountdownInner, {
    Group: CountdownGroup
})