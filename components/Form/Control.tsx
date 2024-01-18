import { twMerge } from 'tailwind-merge'
import { ComponentBaseProps } from '../types'

export type ControlProps = React.HTMLAttributes<HTMLLabelElement>
    & ComponentBaseProps & {
        label?: React.ReactNode
        help?: React.ReactNode
        horizontal?: boolean
    }

export const Control = (
    {
        children,
        label,
        help,
        horizontal,
        dataTheme,
        className,
        ...props
    }: ControlProps,
) => {

    const classes = twMerge(
        'form-control',
        horizontal && 'flex-row gap-2 items-center',
        className,
    )

    return (
        <label data-theme={dataTheme} className={classes} {...props}>
            {label && (
                <div className='label'>
                    <span className="label-text">{label}</span>
                </div>
            )}
            <div className='flex flex-col'>
                {children}
                {help && (
                    <div className='label'>
                        <span className="label-text-alt">{help}</span>
                    </div>
                )}
            </div>
        </label>
    )
}