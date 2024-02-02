import { Select, Form, TooltipProps, Divider, Toggle, Tooltip, Button } from 'daisyui-react';
import React from 'react';
const { Option } = Select

export default function App() {
    const [color, setColor] = React.useState<TooltipProps['color']>()
    const [position, setPosition] = React.useState<TooltipProps['position']>()
    const [open, setOpen] = React.useState(false)

    return (
        <>
            <div className='flex flex-wrap gap-8'>
                <Form.Control label="Color">
                    <Select
                        onChange={
                            (e) => setColor(e.target.value as any)
                        }
                        placeholder={{ disabled: false }}
                        items={[
                            'primary', 'secondary', 'accent',
                            'info', 'success', 'warning', 'error',
                        ]}
                    />
                </Form.Control>
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
                <Toggle
                    label="Force open"
                    checked={open}
                    onChange={
                        (e) => setOpen(e.target.checked)
                    }
                />
            </div>

            <Divider>Preview</Divider>

            <div className='flex justify-center'>
                <Tooltip
                    title='hello'
                    color={color}
                    position={position}
                    open={open}
                >
                    <Button>Hover me</Button>
                </Tooltip>
            </div>
        </>
    )
}