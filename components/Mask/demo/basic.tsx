import { Select, Form, Divider, Mask, MaskProps } from 'daisyui-react';
import React from 'react';
import { twMerge } from 'tailwind-merge';

export default function App() {
    const [mask, setMask] = React.useState<MaskProps['mask']>()
    const [half, setHalf] = React.useState<MaskProps['half']>()

    return (
        <>
            <div className='flex flex-wrap gap-8'>
                <Form.Control label="Mask">
                    <Select
                        onChange={
                            (value) => setMask(value as any)
                        }
                        items={[
                            'squircle', 'heart', 'decagon', 'pentagon', 'diamond', 'square', 'circle',
                            'hexagon', 'hexagon-2',
                            'parallelogram', 'parallelogram-2', 'parallelogram-3', 'parallelogram-4',
                            'star', 'star-2',
                            'triangle', 'triangle-2', 'triangle-3', 'triangle-4',
                        ]}
                    />
                </Form.Control>
                <Form.Control label="Half">
                    <Select
                        onChange={
                            (value) => setHalf(value as any)
                        }
                        items={[
                            'half-1', 'half-2'
                        ]}
                    />
                </Form.Control>
            </div>

            <Divider>Preview</Divider>

            <div className='flex justify-center'>
                <div className={twMerge(
                    'flex w-40',
                    half === 'half-2' && 'justify-end'
                )}>
                    <Mask
                        mask={mask}
                        half={half}
                        className={twMerge(
                            'flex',
                            half && 'w-20',
                            half === 'half-2' && 'justify-end'
                        )}
                    >
                        <img
                            className={twMerge(
                                'w-40 h-40 max-w-none',
                            )}
                            src="https://daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.jpg"
                        />
                    </Mask>
                </div>
            </div>
        </>
    )
}