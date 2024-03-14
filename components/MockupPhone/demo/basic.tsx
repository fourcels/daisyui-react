import {
  Select,
  Form,
  Divider,
  Alert,
  AlertProps,
  Button,
  MockupPhoneProps,
  Toggle,
  MockupPhone,
  Artboard,
} from "daisyui-react";
import React from "react";

export default function App() {
  const [color, setColor] = React.useState<MockupPhoneProps["color"]>();
  const [camera, setCamera] = React.useState(true);

  return (
    <>
      <div className="flex flex-wrap gap-8">
        <Form.Control label="Color">
          <Select
            onChange={(value) => setColor(value as any)}
            items={[
              "neutral",
              "primary",
              "secondary",
              "accent",
              "info",
              "success",
              "warning",
              "error",
            ]}
          />
        </Form.Control>
        <Toggle
          label="Camera"
          checked={camera}
          onChange={(checked) => setCamera(checked)}
        />
      </div>

      <Divider>Preview</Divider>

      <div className="flex justify-center">
        <MockupPhone camera={camera} color={color}>
          <Artboard>Hi.</Artboard>
        </MockupPhone>
      </div>
    </>
  );
}
