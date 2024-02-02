import { twMerge } from 'tailwind-merge'
import { ComponentBaseProps } from '../types'
import React from 'react'

export type FormControlProps = React.HTMLAttributes<HTMLDivElement>
    & ComponentBaseProps & {
        label?: React.ReactNode
        help?: React.ReactNode
        horizontal?: boolean
    }

export const FormControl = React.forwardRef<HTMLDivElement, FormControlProps>((
    {
        children,
        label,
        help,
        horizontal,
        dataTheme,
        className,
        ...props
    },
    ref,
) => {

    const classes = twMerge(
        'form-control',
        horizontal && 'flex-row gap-2 items-center',
        className,
    )

    return (
        <div ref={ref} data-theme={dataTheme} className={classes} {...props}>
            {label && (
                <label className='label'>
                    <span className="label-text">{label}</span>
                </label>
            )}
            <div className='flex flex-col'>
                {children}
                {help && (
                    <div className='label'>
                        <span className="label-text-alt">{help}</span>
                    </div>
                )}
            </div>
        </div>
    )
})

FormControl.displayName = 'FormControl'