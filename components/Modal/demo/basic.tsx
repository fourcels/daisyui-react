import {
  Form,
  Divider,
  Toggle,
  Button,
  Modal,
  ModalProps,
  Select,
} from "daisyui-react";
import React from "react";

export default function App() {
  const [position, setPosition] = React.useState<ModalProps["position"]>();
  const [backdrop, setBackdrop] = React.useState(false);
  const [close, setClose] = React.useState(true);
  return (
    <>
      <div className="flex flex-wrap gap-8">
        <Form.Control label="Position">
          <Select
            onChange={(value) => setPosition(value as any)}
            items={["top", "middle", "bottom"]}
          />
        </Form.Control>
        <Toggle
          label="Backdrop"
          checked={backdrop}
          onChange={(e) => setBackdrop(e.target.checked)}
        />
        <Toggle
          label="Close"
          checked={close}
          onChange={(e) => setClose(e.target.checked)}
        />
      </div>

      <Divider>Preview</Divider>

      <div className="flex justify-center">
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
                dialog.close();
              }}
            >
              Close
            </Modal.ActionButton>
          </Modal.Action>
        </Modal>
      </div>
    </>
  );
}
