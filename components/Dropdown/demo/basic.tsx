import {
    Select, Form, Divider, Toggle, Button,
    DropdownProps,
    Dropdown,
    Menu
} from 'daisyui-react';
import React from 'react';

export default function App() {
    const [position, setPosition] = React.useState<DropdownProps['position']>()
    const [end, setEnd] = React.useState(false)
    const [hover, setHover] = React.useState(false)
    const [open, setOpen] = React.useState(false)

    return (
        <>
            <div className='flex flex-wrap gap-8'>

                <Form.Control label="Position">
                    <Select
                        onChange={
                            (e) => setPosition(e.target.value as any)
                        }
                        placeholder={{ disabled: false }}
                        items={[
                            'top', 'bottom',
                            'left', 'right',
                        ]}
                    />
                </Form.Control>
                <Form.Control label="End" horizontal>
                    <Toggle
                        checked={end}
                        onChange={
                            (e) => setEnd(e.target.checked)
                        }
                    />
                </Form.Control>
                <Form.Control label="Hover" horizontal>
                    <Toggle
                        checked={hover}
                        onChange={
                            (e) => setHover(e.target.checked)
                        }
                    />
                </Form.Control>
                <Form.Control label="Force open" horizontal>
                    <Toggle
                        checked={open}
                        onChange={
                            (e) => setOpen(e.target.checked)
                        }
                    />
                </Form.Control>
            </div>

            <Divider>Preview</Divider>

            <div className='flex justify-center'>
                <Dropdown
                    position={position}
                    open={open}
                    end={end}
                    hover={hover}
                    trigger={(
                        <Button>Click</Button>
                    )}
                >
                    <Menu className='bg-base-200 rounded-box w-52'>
                        <Menu.Item><a>Item 1</a></Menu.Item>
                        <Menu.Item><a>Item 2</a></Menu.Item>
                    </Menu>
                </Dropdown>
            </div>
        </>
    )
}