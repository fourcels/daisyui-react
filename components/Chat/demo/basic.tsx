import { Select, Form, Divider, ChatProps, Chat, ChatBubbleProps } from 'daisyui-react';
import React from 'react';

export default function App() {
    const [position, setPosition] = React.useState<ChatProps['position']>()
    const [color, setColor] = React.useState<ChatBubbleProps['color']>()
    return (
        <>
            <div className='flex flex-wrap gap-8'>
                <Form.Control label="Position">
                    <Select
                        onChange={
                            (value) => setPosition(value as any)
                        }
                        items={['start', 'end']}
                    />
                </Form.Control>
                <Form.Control label="Color">
                    <Select
                        onChange={
                            (value) => setColor(value as any)
                        }
                        items={[
                            'primary', 'secondary', 'accent',
                            'info', 'success', 'warning', 'error',
                        ]}
                    />
                </Form.Control>
            </div>

            <Divider>Preview</Divider>

            <div>
                <Chat position={position}>
                    <Chat.Image src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Tailwind CSS chat bubble component" />
                    <Chat.Header>
                        Obi-Wan Kenobi
                        <time className="ml-1 text-xs opacity-50">12:45</time>
                    </Chat.Header>
                    <Chat.Bubble color={color}>It's over Anakin, <br />I have the high ground.</Chat.Bubble>
                    <Chat.Footer>
                        Delivered
                    </Chat.Footer>
                </Chat>
            </div>
        </>
    )
}