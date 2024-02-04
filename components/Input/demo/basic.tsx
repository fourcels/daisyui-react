import { Select, Form, Divider, Toggle, Button } from 'daisyui-react';
import React from 'react';
import { Input, InputProps } from '..';

export default function App() {
    const [color, setColor] = React.useState<InputProps['color']>()
    const [size, setSize] = React.useState<InputProps['size']>()
    const [bordered, setBordered] = React.useState(true)
    const [disabled, setDisabled] = React.useState(false)

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
                            'ghost'
                        ]}
                    />
                </Form.Control>
                <Form.Control label="Size">
                    <Select
                        onChange={
                            (e) => setSize(e.target.value as any)
                        }
                        placeholder={{ disabled: false }}
                        items={['xs', 'sm', 'md', 'lg']}
                    />
                </Form.Control>
                <Toggle
                    label="Bordered"
                    checked={bordered}
                    onChange={
                        (e) => setBordered(e.target.checked)
                    }
                />
                <Toggle
                    label="Disabled"
                    checked={disabled}
                    onChange={
                        (e) => setDisabled(e.target.checked)
                    }
                />
            </div>

            <Divider>Preview</Divider>

            <div className='flex justify-center'>
                <Form.Control label="What is your name?" className='w-full max-w-xs'>
                    <Input
                        color={color}
                        size={size}
                        bordered={bordered}
                        disabled={disabled}
                        placeholder="Type here"
                        className='w-full max-w-xs'
                    />
                </Form.Control>
            </div>
        </>
    )
}