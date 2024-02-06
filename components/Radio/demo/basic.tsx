import { Form, Divider, Select, Checkbox, RadioProps, Radio, Toggle } from 'daisyui-react';
import React from 'react';


export default function App() {
    const [color, setColor] = React.useState<RadioProps['color']>()
    const [size, setSize] = React.useState<RadioProps['size']>()
    const [disabled, setDisabled] = React.useState(false)
    const [reverse, setReverse] = React.useState(false)
    return (
        <>
            <div className='flex gap-4'>
                <Form.Control label="Color">
                    <Select
                        onChange={
                            (value) => setColor(value as any)
                        }
                        items={[
                            'primary', 'secondary', 'accent',
                            'info', 'success', 'warning', 'error',
                        ]}
                    />
                </Form.Control>
                <Form.Control label="Size">
                    <Select
                        onChange={
                            (value) => setSize(value as any)
                        }
                        items={['xs', 'sm', 'md', 'lg']}

                    />
                </Form.Control>

                <Toggle label="Disabled" checked={disabled} onChange={(e) => setDisabled(e.target.checked)} />
                <Toggle label="Reverse" checked={reverse} onChange={(e) => setReverse(e.target.checked)} />
            </div>

            <Divider>Preview</Divider>

            <div className='flex flex-col items-center'>
                <Radio reverse={reverse} disabled={disabled} label="Radio 1" name="radio" size={size} color={color} />
                <Radio reverse={reverse} disabled={disabled} label="Radio 2" name="radio" size={size} color={color} />
            </div>
        </>
    )
}