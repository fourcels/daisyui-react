import {
    Select, Form, Divider, Toggle, Button,
    Menu
} from 'daisyui-react';
import React from 'react';
import { Card } from '..';
import { twMerge } from 'tailwind-merge';

export default function App() {
    const [bordered, setBordered] = React.useState(true)
    const [shadow, setShadow] = React.useState(true)
    const [imageFull, setImageFull] = React.useState(false)
    const [compact, setCompact] = React.useState(false)
    const [glass, setGlass] = React.useState(false)
    const [side, setSide] = React.useState(false)

    return (
        <>
            <div className='flex flex-wrap gap-8'>
                <Form.Control label="Bordered" horizontal>
                    <Toggle
                        checked={bordered}
                        onChange={
                            (e) => setBordered(e.target.checked)
                        }
                    />
                </Form.Control>
                <Form.Control label="Shadow" horizontal>
                    <Toggle
                        checked={shadow}
                        onChange={
                            (e) => setShadow(e.target.checked)
                        }
                    />
                </Form.Control>
                <Form.Control label="Image Full" horizontal>
                    <Toggle
                        checked={imageFull}
                        onChange={
                            (e) => setImageFull(e.target.checked)
                        }
                    />
                </Form.Control>
                <Form.Control label="Compact" horizontal>
                    <Toggle
                        checked={compact}
                        onChange={
                            (e) => setCompact(e.target.checked)
                        }
                    />
                </Form.Control>
                <Form.Control label="Glass" horizontal>
                    <Toggle
                        checked={glass}
                        onChange={
                            (e) => setGlass(e.target.checked)
                        }
                    />
                </Form.Control>
                <Form.Control label="Side" horizontal>
                    <Toggle
                        checked={side}
                        onChange={
                            (e) => setSide(e.target.checked)
                        }
                    />
                </Form.Control>
            </div>

            <Divider>Preview</Divider>

            <div className='flex justify-center'>
                <Card
                    bordered={bordered}
                    compact={compact}
                    shadow={shadow}
                    imageFull={imageFull}
                    glass={glass}
                    side={side}
                    className={twMerge(
                        'bg-base-200 w-96',
                        side && 'w-auto'
                    )}
                >
                    <Card.Image src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
                    <Card.Body>
                        <Card.Title>Shoes!</Card.Title>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <Card.Actions>
                            <Button color='primary'>Buy Now</Button>
                        </Card.Actions>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}