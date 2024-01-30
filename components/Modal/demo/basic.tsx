import {
    Form, Divider, Toggle, Button,
    Modal,
    ModalProps,
    Select
} from 'daisyui-react';
import React from 'react';

export default function App() {
    const [position, setPosition] = React.useState<ModalProps['position']>()
    const [backdrop, setBackdrop] = React.useState(false)
    const [close, setClose] = React.useState(true)
    return (
        <>
            <div className='flex flex-wrap gap-8'>
                <Form.Control label="Position">
                    <Select
                        onChange={
                            (e) => setPosition(e.target.value as any)
                        }
                        placeholder={{ disabled: false }}
                        items={[
                            'top', 'middle', 'bottom',
                        ]}
                    />
                </Form.Control>
                <Form.Control label="Backdrop" horizontal>
                    <Toggle
                        checked={backdrop}
                        onChange={
                            (e) => setBackdrop(e.target.checked)
                        }
                    />
                </Form.Control>
                <Form.Control label="Close" horizontal>
                    <Toggle
                        checked={close}
                        onChange={
                            (e) => setClose(e.target.checked)
                        }
                    />
                </Form.Control>
            </div>

            <Divider>Preview</Divider>

            <div className='flex justify-center'>
                <Modal
                    position={position}
                    close={close}
                    backdrop={backdrop}
                    trigger={<Button>open modal</Button>}
                >
                    <Modal.Header>Hello!</Modal.Header>
                    <Modal.Body>
                        Press ESC key or click the button below to close
                    </Modal.Body>
                    <Modal.Action>
                        <Modal.ActionButton
                            onClick={(dialog) => {
                                dialog.close()
                            }}
                        >
                            Close
                        </Modal.ActionButton>
                    </Modal.Action>
                </Modal>
            </div>
        </>
    )
}