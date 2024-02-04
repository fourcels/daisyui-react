import { Select, Form, Divider, Collapse, Toggle, Accordion, AccordionProps, } from 'daisyui-react';
import React from 'react';

export default function App() {
    const [arrow, setArrow] = React.useState<AccordionProps['arrow']>()
    const [bordered, setBordered] = React.useState(true)

    return (
        <>
            <div className='flex flex-wrap gap-8'>
                <Form.Control label="Arrow">
                    <Select
                        onChange={
                            (e) => setArrow(e.target.value as any)
                        }
                        placeholder={{ disabled: false }}
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
            </div>

            <Divider>Preview</Divider>

            <div className='flex justify-center'>
                <Accordion
                    className='w-full max-w-md'
                    arrow={arrow}
                    bordered={bordered}
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