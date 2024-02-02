import { Form, Divider, Select, Checkbox, RadioProps, Radio, Toggle } from 'daisyui-react';
import React from 'react';


export default function App() {
    const [color, setColor] = React.useState<RadioProps['color']>()
    const [size, setSize] = React.useState<RadioProps['size']>()
    const [disabled, setDisabled] = React.useState(false)
    return (
        <>
            <div className='flex gap-4'>
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
                <Form.Control label="Size">
                    <Select
                        onChange={
                            (e) => setSize(e.target.value as any)
                        }
                        placeholder={{ disabled: false }}
                        items={['xs', 'sm', 'md', 'lg']}

                    />
                </Form.Control>

                <Toggle label="Disabled" checked={disabled} onChange={(e) => setDisabled(e.target.checked)} />
            </div>

            <Divider>Preview</Divider>

            <div className='flex justify-center'>
                <div className='flex flex-col w-36'>
                    <Radio disabled={disabled} label="Radio 1" name="radio" size={size} color={color} />
                    <Radio disabled={disabled} label="Radio 2" name="radio" size={size} color={color} />
                </div>
            </div>
        </>
    )
}