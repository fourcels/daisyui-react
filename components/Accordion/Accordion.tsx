import React, { ReactElement, forwardRef } from 'react';
import { ComponentBaseProps } from '../types';
import { twMerge } from 'tailwind-merge';
import { AccordionCollapse, AccordionCollapseProps } from './AccordionCollapse';
import { AccordionJoin } from './AccordionJoin';

export type { AccordionCollapseProps }

export type AccordionProps =
    Omit<React.ComponentProps<'div'>, 'children'>
    & ComponentBaseProps
    & {
        children: ReactElement<AccordionCollapseProps> | ReactElement<AccordionCollapseProps>[]
        defaultIndex?: number
        bordered?: boolean
        arrow?: 'arrow' | 'plus'
    }

const AccordionInner = forwardRef<HTMLDivElement, AccordionProps>((
    {
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
        'accordion gap-2 flex flex-col',
        className,
    )
    return (
        <div
            ref={ref}
            className={classes}
            data-theme={dataTheme}
            {...props}
        >
            {React.Children.map(children, (child, idx) => {
                return React.cloneElement(child, {
                    open: idx === index,
                    onClick: () => setIndex(idx),
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
    Join: AccordionJoin,
})