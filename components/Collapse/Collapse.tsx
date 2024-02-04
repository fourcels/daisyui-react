import React, { forwardRef } from 'react';
import { ComponentBaseProps } from '../types';
import { twMerge } from 'tailwind-merge';
import { CollapseContent, CollapseContentProps } from './CollapseContent';
import { CollapseTitle, CollapseTitleProps } from './CollapseTitle';

export type { CollapseTitleProps, CollapseContentProps }

export type CollapseProps =
    React.ComponentProps<'div'>
    & ComponentBaseProps
    & {
        bordered?: boolean
        open?: boolean
        arrow?: 'arrow' | 'plus'
    }

const CollapseInner = forwardRef<HTMLDivElement, CollapseProps>((
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
            <input type="checkbox" />
            {children}
        </div>
    )
})

CollapseInner.displayName = 'Collapse'

export const Collapse = Object.assign(CollapseInner, {
    Title: CollapseTitle,
    Content: CollapseContent,
})