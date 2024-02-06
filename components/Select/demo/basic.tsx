import { Select, Form, SelectProps, Divider, Toggle } from 'daisyui-react';
import React from 'react';
const { Option } = Select

export default function App() {
    const [color, setColor] = React.useState<SelectProps['color']>()
    const [size, setSize] = React.useState<SelectProps['size']>()
    const [bordered, setBordered] = React.useState(true)
    const [disabled, setDisabled] = React.useState(false)

    return (
        <>
            <div className='flex flex-wrap gap-8'>
                <Form.Control label="Color">
                    <Select
                        onChange={(value) => setColor(value as any)}
                        items={[
                            'primary', 'secondary', 'accent',
                            'info', 'success', 'warning', 'error',
                            'ghost'
                        ]}
                    />
                </Form.Control>
                <Form.Control label="Size">
                    <Select
                        onChange={(value) => setSize(value as any)}
                        items={['xs', 'sm', 'md', 'lg']}
                    />
                </Form.Control>
                <Toggle
                    label="Bordered"
                    checked={bordered}
                    onChange={(e) => setBordered(e.target.checked)}
                />
                <Toggle
                    label="Disabled"
                    checked={disabled}
                    onChange={(e) => setDisabled(e.target.checked)}
                />
            </div>

            <Divider>Preview</Divider>

            <div className='flex justify-center'>
                <Form.Control label="Simpson">
                    <Select
                        color={color}
                        size={size}
                        bordered={bordered}
                        disabled={disabled}
                        placeholder="Pick your favorite Simpson"
                        items={["Homer", "Marge", "Bart", "Lisa", "Maggie"]}
                    />
                </Form.Control>
            </div>
        </>
    )
}