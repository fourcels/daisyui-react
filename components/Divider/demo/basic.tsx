import { Select, Form, Divider, DividerProps } from 'daisyui-react';
import React from 'react';
import { twMerge } from 'tailwind-merge';

export default function App() {
    const [color, setColor] = React.useState<DividerProps['color']>()
    const [direction, setDirection] = React.useState<DividerProps['direction']>()
    const [position, setPosition] = React.useState<DividerProps['position']>()

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
                            'neutral', 'primary', 'secondary', 'accent',
                            'info', 'success', 'warning', 'error',
                        ]}
                    />
                </Form.Control>
                <Form.Control label="Direction">
                    <Select
                        onChange={
                            (e) => setDirection(e.target.value as any)
                        }
                        placeholder={{ disabled: false }}
                        items={['vertical', 'horizontal']}
                    />
                </Form.Control>
                <Form.Control label="Position">
                    <Select
                        onChange={
                            (e) => setPosition(e.target.value as any)
                        }
                        placeholder={{ disabled: false }}
                        items={['start', 'end']}
                    />
                </Form.Control>
            </div>

            <Divider>Preview</Divider>

            <div>
                <Divider
                    color={color}
                    position={position}
                    direction={direction}
                    className={twMerge(
                        direction === 'horizontal' && 'h-32'
                    )}
                >
                    Divider
                </Divider>
            </div>
        </>
    )
}