import {
  Select,
  Form,
  Divider,
  MockupPhoneProps,
  MockupPhone,
} from "daisyui-react";
import React from "react";

export default function App() {
  const [color, setColor] = React.useState<MockupPhoneProps["color"]>();
  const [size, setSize] = React.useState<MockupPhoneProps["size"]>();

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
        <Form.Control label="Size">
          <Select
            onChange={(value) => setSize(value as any)}
            items={[
              "phone-1",
              "phone-2",
              "phone-3",
              "phone-4",
              "phone-5",
              "phone-6",
            ]}
          />
        </Form.Control>
      </div>

      <Divider>Preview</Divider>

      <div className="flex justify-center overflow-x-auto">
        <MockupPhone size={size} color={color}>
          Hi.
        </MockupPhone>
      </div>
    </>
  );
}
