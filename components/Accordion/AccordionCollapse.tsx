import React, { forwardRef } from 'react';
import { ComponentBaseProps } from '../types';
import { twMerge } from 'tailwind-merge';


export type AccordionCollapseProps =
    React.ComponentProps<'div'>
    & ComponentBaseProps
    & {
        bordered?: boolean
        open?: boolean
        arrow?: 'arrow' | 'plus'
    }

export const AccordionCollapse = forwardRef<HTMLDivElement, AccordionCollapseProps>((
    {
        bordered = true,
        open,
        arrow,
        children,
        dataTheme,
        className,
        ...props
    },
    ref
) => {
    const arrows = {
        arrow: 'collapse-arrow',
        plus: 'collapse-plus'
    }

    const classes = twMerge(
        'collapse bg-base-200',
        arrow && arrows[arrow],
        open && 'collapse-open',
        bordered && 'border border-base-300',
        className,
    )


    return (
        <div
            ref={ref}
            className={classes}
            data-theme={dataTheme}
            {...props}
        >
            {children}
        </div>
    )
})

AccordionCollapse.displayName = 'AccordionCollapse'
