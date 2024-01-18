import { Toggle, Form, ToggleProps, Divider, Select } from 'daisyui-react';
import React from 'react';

const { Option } = Select

export default function App() {
    const [color, setColor] = React.useState<ToggleProps['color']>()
    const [size, setSize] = React.useState<ToggleProps['size']>("md")

    return (
        <>
            <div className='flex gap-4'>
                <Form.Control label="Color">
                    <Select
                        value={color}
                        onChange={
                            (e) => setColor(e.target.value as any)
                        }>
                        <Option value="">default</Option>
                        <Option>primary</Option>
                        <Option>secondary</Option>
                        <Option>accent</Option>
                        <Option>success</Option>
                        <Option>warning</Option>
                        <Option>error</Option>
                    </Select>
                </Form.Control>
                <Form.Control label="Size">
                    <Select
                        value={size}
                        onChange={
                            (e) => setSize(e.target.value as any)
                        }>
                        <Option>lg</Option>
                        <Option>md</Option>
                        <Option>sm</Option>
                        <Option>xs</Option>
                    </Select>
                </Form.Control>
            </div>

            <Divider>Preview</Divider>

            <div className='flex justify-center'>
                <Form.Control label="Remember me" horizontal>
                    <Toggle defaultChecked size={size} color={color} />
                </Form.Control>
            </div>
        </>
    )
}