import { Select, Form, TooltipProps, Divider, Toggle, Tooltip, Button, BadgeProps, Badge } from 'daisyui-react';
import React from 'react';
const { Option } = Select

export default function App() {
    const [color, setColor] = React.useState<BadgeProps['color']>()
    const [size, setSize] = React.useState<BadgeProps['size']>()
    const [outline, setOutline] = React.useState(false)

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
                            'ghost',
                        ]}
                    />
                </Form.Control>
                <Form.Control label="Size">
                    <Select
                        onChange={
                            (e) => setSize(e.target.value as any)
                        }
                        placeholder={{ disabled: false }}
                        items={[
                            'xs', 'sm',
                            'md', 'lg',
                        ]}
                    />
                </Form.Control>
                <Toggle
                    label="Outline"
                    checked={outline}
                    onChange={
                        (e) => setOutline(e.target.checked)
                    }
                />
            </div>

            <Divider>Preview</Divider>

            <div className='flex justify-center'>
                <Badge
                    color={color}
                    size={size}
                    outline={outline}
                >
                    Badge
                </Badge>
            </div>
        </>
    )
}