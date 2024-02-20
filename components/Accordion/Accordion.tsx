import React, { ReactElement, forwardRef } from 'react';
import { ComponentBaseProps } from '../types';
import { twMerge } from 'tailwind-merge';
import { AccordionCollapse, AccordionCollapseProps } from './AccordionCollapse';

export type { AccordionCollapseProps }

export type AccordionProps =
    Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>
    & ComponentBaseProps
    & {
        children?: ReactElement<AccordionCollapseProps> | ReactElement<AccordionCollapseProps>[]
        defaultIndex?: number
        bordered?: boolean
        arrow?: 'arrow' | 'plus'
        join?: boolean
    }

const AccordionInner = forwardRef<HTMLDivElement, AccordionProps>((
    {
        join,
        defaultIndex = 0,
        arrow,
        bordered = true,
        children,
        dataTheme,
        className,
        ...props
    },
    ref
) => {
    const [index, setIndex] = React.useState<number>(defaultIndex)

    const classes = twMerge(
        'accordion',
        join ? 'join join-vertical' : 'flex flex-col gap-2',
        className,
    )
    return (
        <div
            ref={ref}
            className={classes}
            data-theme={dataTheme}
            {...props}
        >
            {children && React.Children.map(children, (child, idx) => {
                return React.cloneElement(child, {
                    open: idx === index,
                    onClick: () => setIndex(idx),
                    className: twMerge(
                        child.props.className,
                        join && 'join-item'
                    ),
                    arrow,
                    bordered,
                })
            })}
        </div>
    )
})

AccordionInner.displayName = 'Accordion'

export const Accordion = Object.assign(AccordionInner, {
    Collapse: AccordionCollapse,
})