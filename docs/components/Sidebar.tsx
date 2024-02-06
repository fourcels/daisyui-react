import { Link, useLocation } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import { Menu } from '../../components/Menu';

type Component = {
    path: string
    name: string
}

const components: Component[] = [
    {
        name: 'Button',
        path: '/components/button'
    },
    {
        name: 'Select',
        path: '/components/select'
    },
    {
        name: 'Toggle',
        path: '/components/toggle'
    },
    {
        name: 'Tooltip',
        path: '/components/tooltip'
    },
    {
        name: 'Menu',
        path: '/components/menu'
    },
    {
        name: 'Dropdown',
        path: '/components/dropdown'
    },
    {
        name: 'Card',
        path: '/components/card'
    },
    {
        name: 'Badge',
        path: '/components/badge'
    },
    {
        name: 'Divider',
        path: '/components/divider'
    },
    {
        name: 'Navbar',
        path: '/components/navbar'
    },
    {
        name: 'Modal',
        path: '/components/modal'
    },
    {
        name: 'Swap',
        path: '/components/swap'
    },
    {
        name: 'Checkbox',
        path: '/components/checkbox'
    },
    {
        name: 'Radio',
        path: '/components/radio'
    },
    {
        name: 'Theme Controller',
        path: '/components/theme-controller'
    },
    {
        name: 'File Input',
        path: '/components/file-input'
    },
    {
        name: 'Join (group items)',
        path: '/components/join'
    },
    {
        name: 'Text Input',
        path: '/components/input'
    },
    {
        name: 'Collapse',
        path: '/components/collapse'
    },
    {
        name: 'Accordion',
        path: '/components/accordion'
    },
    {
        name: 'Mask',
        path: '/components/mask'
    },
    {
        name: 'Loading',
        path: '/components/loading'
    },
]

export function Sidebar({
    className
}: {
    className?: string
}) {
    const location = useLocation()
    return (
        <div className={twMerge('relative border-r bg-base-100 z-10', className)}>
            <div className='sticky top-0'>
                <Menu>
                    <Menu.Title>Components</Menu.Title>
                    {components.map(item => (
                        <Menu.Item key={item.path} active={location.pathname === item.path}>
                            <Link to={item.path}>{item.name}</Link>
                        </Menu.Item>
                    ))}
                </Menu>
            </div>
        </div>
    )
}