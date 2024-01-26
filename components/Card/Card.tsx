import React from 'react';
import { twMerge } from 'tailwind-merge'
import { ComponentBaseProps } from '../types';
import { CardActions, CardActionsProps } from './CardActions';
import { CardBody, CardBodyProps } from './CardBody';
import { CardImage, CardImageProps } from './CardImage';
import { CardTitle, CardTitleProps } from './CardTitle';

export type {
    CardActionsProps, CardBodyProps,
    CardImageProps, CardTitleProps,
}

export type CardProps = React.HTMLAttributes<HTMLDivElement> &
    ComponentBaseProps & {
        bordered?: boolean
        shadow?: boolean
        glass?: boolean
        imageFull?: boolean
        compact?: boolean
        side?: boolean
        responsive?: boolean
    }

const CardInner = React.forwardRef<HTMLDivElement, CardProps>(
    (
        {
            bordered = true,
            shadow = true,
            compact,
            glass,
            side,
            imageFull,
            responsive,
            className,
            ...props
        },
        ref
    ): JSX.Element => {
        const classes = twMerge(
            'card bg-base-100',
            compact && 'card-compact',
            bordered && 'card-bordered',
            side && 'card-side',
            responsive && 'lg:card-side',
            glass && 'glass',
            shadow && 'shadow-xl',
            imageFull && 'image-full',
            className,
        )

        return <div aria-label="Card" {...props} className={classes} ref={ref} />
    }
)

CardInner.displayName = "Card"

export const Card = Object.assign(CardInner, {
    Actions: CardActions,
    Body: CardBody,
    Title: CardTitle,
    Image: CardImage,
})