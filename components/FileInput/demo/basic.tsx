import { Toggle, Form, Divider, Select, Checkbox, FileInputProps, FileInput } from 'daisyui-react';
import React from 'react';


export default function App() {
    const [color, setColor] = React.useState<FileInputProps['color']>()
    const [size, setSize] = React.useState<FileInputProps['size']>()

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
            </div>

            <Divider>Preview</Divider>

            <div className='flex justify-center'>
                <Form.Control label="Pick a file">
                    <FileInput
                        size={size}
                        color={color}
                    />
                </Form.Control>
            </div>
        </>
    )
}