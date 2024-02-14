import { Select, Form, Divider, Avatar, AvatarProps } from 'daisyui-react';
import React from 'react';

export default function App() {
    const [size, setSize] = React.useState<AvatarProps['size']>()
    const [color, setColor] = React.useState<AvatarProps['color']>()
    const [ring, setRing] = React.useState<AvatarProps['ring']>()
    const [shape, setShape] = React.useState<AvatarProps['shape']>()
    const [mask, setMask] = React.useState<AvatarProps['mask']>()
    const [indicator, setIndicator] = React.useState<AvatarProps['indicator']>()

    return (
        <>
            <div className='flex flex-wrap gap-8'>
                <Form.Control label="Size">
                    <Select
                        onChange={
                            (value) => setSize(value as any)
                        }
                        items={[
                            'xs', 'sm', 'md', 'lg',
                        ]}
                    />
                </Form.Control>
                <Form.Control label="Color">
                    <Select
                        onChange={
                            (value) => setColor(value as any)
                        }
                        items={[
                            'neutral', 'primary', 'secondary', 'accent',
                            'info', 'success', 'warning', 'error',
                        ]}
                    />
                </Form.Control>
                <Form.Control label="Ring">
                    <Select
                        onChange={
                            (value) => setRing(value as any)
                        }
                        items={[
                            'ring',
                            'neutral', 'primary', 'secondary', 'accent',
                            'info', 'success', 'warning', 'error',
                        ]}
                    />
                </Form.Control>
                <Form.Control label="Shape">
                    <Select
                        onChange={
                            (value) => setShape(value as any)
                        }
                        items={[
                            'square', 'circle',
                        ]}
                    />
                </Form.Control>
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
                <Form.Control label="Indicator">
                    <Select
                        onChange={
                            (value) => setIndicator(value as any)
                        }
                        items={['online', 'offline']}
                    />
                </Form.Control>
            </div>

            <Divider>Preview</Divider>

            <div className='flex justify-center gap-4'>
                <Avatar
                    size={size}
                    shape={shape}
                    mask={mask}
                    color={color}
                    ring={ring}
                    indicator={indicator}
                    src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
                <Avatar
                    size={size}
                    shape={shape}
                    mask={mask}
                    color={color}
                    ring={ring}
                    indicator={indicator}
                >
                    <span className="text-3xl">D</span>
                </Avatar>
            </div>
        </>
    )
}