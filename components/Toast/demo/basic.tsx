import { Select, Form, Divider, Toast, ToastProps } from "daisyui-react";
import React from "react";

export default function App() {
  const [color, setColor] = React.useState<ToastProps["color"]>();
  const [horizontal, setHorizontal] =
    React.useState<ToastProps["horizontal"]>();
  const [vertical, setVertical] = React.useState<ToastProps["vertical"]>();

  return (
    <>
      <div className="flex flex-wrap gap-8">
        <Form.Control label="Color">
          <Select
            onChange={(value) => setColor(value as any)}
            items={["info", "success", "warning", "error"]}
          />
        </Form.Control>
        <Form.Control label="Horizontal">
          <Select
            onChange={(value) => setHorizontal(value as any)}
            items={["start", "center", "end"]}
          />
        </Form.Control>
        <Form.Control label="Vertical">
          <Select
            onChange={(value) => setVertical(value as any)}
            items={["top", "middle", "bottom"]}
          />
        </Form.Control>
      </div>

      <Divider>Preview</Divider>

      <div className="h-60 relative">
        <Toast
          horizontal={horizontal}
          vertical={vertical}
          color={color}
          className="absolute"
        >
          New message arrived.
        </Toast>
      </div>
    </>
  );
}
