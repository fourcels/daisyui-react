import {
    Select, Form, Divider,
    Menu, Toggle,
    MenuProps,
} from 'daisyui-react';
import React from 'react';

export default function App() {
    const [size, setSize] = React.useState<MenuProps['size']>()
    const [direction, setDirection] = React.useState<MenuProps['direction']>()
    const [responsive, setResponsive] = React.useState(false)

    return (
        <>
            <div className='flex flex-wrap gap-8'>
                <Form.Control label="Size">
                    <Select
                        onChange={
                            (e) => setSize(e.target.value as any)
                        }
                        placeholder={{ disabled: false }}
                        items={[
                            'xs', 'sm', 'md', 'lg'
                        ]}
                    />
                </Form.Control>

                <Form.Control label="Direction">
                    <Select
                        onChange={
                            (e) => setDirection(e.target.value as any)
                        }
                        placeholder={{ disabled: false }}
                        items={[
                            'vertical', 'horizontal',
                        ]}
                    />
                </Form.Control>

                <Form.Control label="Responsive" horizontal>
                    <Toggle
                        checked={responsive}
                        onChange={
                            (e) => setResponsive(e.target.checked)
                        }
                    />
                </Form.Control>

            </div>

            <Divider>Preview</Divider>

            <div className='flex justify-center'>
                <Menu
                    className='bg-base-200 rounded-box'
                    size={size}
                    direction={direction}
                    responsive={responsive}
                >
                    <Menu.Item>
                        <a>
                            <svg xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                            Inbox
                            <span className="badge badge-sm">99+</span>
                        </a>
                    </Menu.Item>
                    <Menu.Item>
                        <a>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Updates
                            <span className="badge badge-sm badge-warning">NEW</span>
                        </a>
                    </Menu.Item>
                    <Menu.Item disabled>
                        <a>
                            Stats
                            <span className="badge badge-xs badge-info"></span>
                        </a>
                    </Menu.Item>
                </Menu>
            </div>
        </>
    )
}