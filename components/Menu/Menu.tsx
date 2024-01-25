import React from 'react'
import { twMerge } from 'tailwind-merge'

import { ComponentBaseProps, ComponentSize } from '../types'

import { MenuTitle, MenuTitleProps } from './MenuTitle'
import { MenuItem, MenuItemProps } from './MenuItem'
import { MenuDropdown, MenuDropdownProps } from './MenuDropdown'
import { MenuDetails, MenuDetailsProps } from './MenuDetails'

export type {
    MenuTitleProps,
    MenuItemProps,
    MenuDropdownProps,
    MenuDetailsProps,
}

export type MenuProps = React.HTMLAttributes<HTMLUListElement> &
    ComponentBaseProps & {
        responsive?: boolean
        direction?: 'vertical' | 'horizontal',
        size?: ComponentSize
    }

const MenuInner = React.forwardRef<HTMLUListElement, MenuProps>((
    {
        responsive,
        direction,
        dataTheme,
        className,
        size,
        ...props
    },
    ref
) => {

    const sizes = {
        lg: 'menu-lg',
        md: 'menu-md',
        sm: 'menu-sm',
        xs: 'menu-xs',
    }

    const directions = {
        vertical: 'menu-vertical',
        horizontal: 'menu-horizontal',
    }

    const classes = twMerge(
        'menu',
        size && sizes[size],
        direction && directions[direction],
        responsive && 'menu-vertical lg:menu-horizontal',
        className,
    )

    return (
        <ul
            role="menu"
            data-theme={dataTheme}
            className={classes}
            {...props}
            ref={ref}
        />
    )
}
)
MenuInner.displayName = "Menu"

export const Menu = Object.assign(MenuInner, {
    Title: MenuTitle,
    Item: MenuItem,
    Dropdown: MenuDropdown,
    Details: MenuDetails,
})