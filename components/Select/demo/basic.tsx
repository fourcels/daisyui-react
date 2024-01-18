import { Select, Form, SelectProps, Divider } from 'daisyui-react';
import React from 'react';
const { Option } = Select

export default function App() {
    const [color, setColor] = React.useState<SelectProps['color']>("primary")
    const [size, setSize] = React.useState<SelectProps['size']>("md")

    return (
        <>
            <div className='flex gap-4'>
                <Form.Control label="Color">
                    <Select value={color} onChange={(e) => setColor(e.target.value as any)}>
                        <Option>primary</Option>
                        <Option>secondary</Option>
                        <Option>accent</Option>
                        <Option>success</Option>
                        <Option>warning</Option>
                        <Option>error</Option>
                        <Option>ghost</Option>
                    </Select>
                </Form.Control>
                <Form.Control label="Size">
                    <Select value={size} onChange={(e) => setSize(e.target.value as any)}>
                        <Option>lg</Option>
                        <Option>md</Option>
                        <Option>sm</Option>
                        <Option>xs</Option>
                    </Select>
                </Form.Control>
            </div>

            <Divider>Preview</Divider>

            <div className='flex justify-center'>
                <Select defaultValue="" color={color} size={size}>
                    <Option disabled value="">Pick your favorite Simpson</Option>
                    <Option>Homer</Option>
                    <Option>Marge</Option>
                    <Option>Bart</Option>
                    <Option>Lisa</Option>
                    <Option>Maggie</Option>
                </Select>
            </div>
        </>
    )
}