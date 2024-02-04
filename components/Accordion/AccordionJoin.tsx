import React, { ReactElement, forwardRef } from 'react';
import { ComponentBaseProps } from '../types';
import { twMerge } from 'tailwind-merge';
import { AccordionCollapseProps } from './AccordionCollapse';

export type { AccordionCollapseProps }

export type AccordionJoinProps =
    Omit<React.ComponentProps<'div'>, 'children'>
    & ComponentBaseProps
    & {
        children: ReactElement<AccordionCollapseProps> | ReactElement<AccordionCollapseProps>[]
        defaultIndex?: number
        bordered?: boolean
        arrow?: 'arrow' | 'plus'
    }

export const AccordionJoin = forwardRef<HTMLDivElement, AccordionJoinProps>((
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
        'accordion join join-vertical',
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
                    className: twMerge(
                        'join-item',
                        child.props.className,
                    )
                })
            })}
        </div>
    )
})

AccordionJoin.displayName = 'AccordionJoin'