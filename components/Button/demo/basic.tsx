import { Select, Form, ButtonProps, Divider, Toggle, Button } from 'daisyui-react';
import React from 'react';
const { Option } = Select

export default function App() {
    const [color, setColor] = React.useState<ButtonProps['color']>()
    const [size, setSize] = React.useState<ButtonProps['size']>()
    const [variant, setVariant] = React.useState<ButtonProps['variant']>()
    const [shape, setShape] = React.useState<ButtonProps['shape']>()
    const [disabled, setDisabled] = React.useState(false)
    const [active, setActive] = React.useState(false)
    const [wide, setWide] = React.useState(false)
    const [block, setBlock] = React.useState(false)
    const [glass, setGlass] = React.useState(false)
    const [loading, setLoading] = React.useState(false)
    const [animation, setAnimation] = React.useState(true)

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
                            'ghost'
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
                <Form.Control label="Variant">
                    <Select
                        onChange={
                            (e) => setVariant(e.target.value as any)
                        }
                        placeholder={{ disabled: false }}
                        items={['outline', 'link']}
                    />
                </Form.Control>
                <Form.Control label="Shape">
                    <Select
                        onChange={
                            (e) => setShape(e.target.value as any)
                        }
                        placeholder={{ disabled: false }}
                        items={['square', 'circle']}
                    />
                </Form.Control>
                <Toggle
                    label="Glass"
                    checked={glass}
                    onChange={
                        (e) => setGlass(e.target.checked)
                    }
                />
                <Toggle
                    label="Wide"
                    checked={wide}
                    onChange={
                        (e) => setWide(e.target.checked)
                    }
                />
                <Toggle
                    label="Block"
                    checked={block}
                    onChange={
                        (e) => setBlock(e.target.checked)
                    }
                />
                <Toggle
                    label="Active"
                    checked={active}
                    onChange={
                        (e) => setActive(e.target.checked)
                    }
                />
                <Toggle
                    label="Disabled"
                    checked={disabled}
                    onChange={
                        (e) => setDisabled(e.target.checked)
                    }
                />
                <Toggle
                    label="Loading"
                    checked={loading}
                    onChange={
                        (e) => setLoading(e.target.checked)
                    }
                />
                <Toggle
                    label="Animation"
                    checked={animation}
                    onChange={
                        (e) => setAnimation(e.target.checked)
                    }
                />
            </div>

            <Divider>Preview</Divider>

            <div className='flex justify-center'>
                <Button
                    color={color}
                    size={size}
                    variant={variant}
                    shape={shape}
                    disabled={disabled}
                    active={active}
                    wide={wide}
                    block={block}
                    glass={glass}
                    loading={loading}
                    animation={animation}
                >
                    Button
                </Button>
            </div>
        </>
    )
}