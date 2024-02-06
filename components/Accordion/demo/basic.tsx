import { Select, Form, Divider, Collapse, Toggle, Accordion, AccordionProps, } from 'daisyui-react';
import React from 'react';

export default function App() {
    const [arrow, setArrow] = React.useState<AccordionProps['arrow']>()
    const [bordered, setBordered] = React.useState(true)
    const [join, setJoin] = React.useState(false)

    return (
        <>
            <div className='flex flex-wrap gap-8'>
                <Form.Control label="Arrow">
                    <Select
                        onChange={
                            (value) => setArrow(value as any)
                        }
                        items={['arrow', 'plus']}
                    />
                </Form.Control>
                <Toggle
                    label="Bordered"
                    checked={bordered}
                    onChange={
                        (e) => setBordered(e.target.checked)
                    }
                />
                <Toggle
                    label="Join"
                    checked={join}
                    onChange={
                        (e) => setJoin(e.target.checked)
                    }
                />
            </div>

            <Divider>Preview</Divider>

            <div className='flex justify-center'>
                <Accordion
                    className='w-full max-w-md'
                    arrow={arrow}
                    bordered={bordered}
                    join={join}
                >
                    <Accordion.Collapse>
                        <Collapse.Title>Click to open this one and close others</Collapse.Title>
                        <Collapse.Content>
                            <p>hello</p>
                        </Collapse.Content>
                    </Accordion.Collapse>
                    <Accordion.Collapse>
                        <Collapse.Title>Click to open this one and close others</Collapse.Title>
                        <Collapse.Content>
                            <p>hello</p>
                        </Collapse.Content>
                    </Accordion.Collapse>
                    <Accordion.Collapse>
                        <Collapse.Title>Click to open this one and close others</Collapse.Title>
                        <Collapse.Content>
                            <p>hello</p>
                        </Collapse.Content>
                    </Accordion.Collapse>
                </Accordion>
            </div>
        </>
    )
}