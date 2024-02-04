import { Select, Form, Divider, DividerProps, JoinProps, Join, Button, Toggle, } from 'daisyui-react';
import React from 'react';
import { twMerge } from 'tailwind-merge';

export default function App() {
    const [direction, setDirection] = React.useState<JoinProps['direction']>()

    return (
        <>
            <div className='flex flex-wrap gap-8'>
                <Form.Control label="Direction">
                    <Select
                        onChange={
                            (e) => setDirection(e.target.value as any)
                        }
                        placeholder={{ disabled: false }}
                        items={['vertical', 'horizontal']}
                    />
                </Form.Control>
            </div>

            <Divider>Preview</Divider>

            <div className='flex justify-center'>
                <Join
                    direction={direction}
                >
                    <Button>Button</Button>
                    <Button>Button</Button>
                    <Button>Button</Button>
                </Join>
            </div>
        </>
    )
}