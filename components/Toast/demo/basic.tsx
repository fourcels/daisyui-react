import {
  Select,
  Form,
  TooltipProps,
  Divider,
  Toggle,
  Tooltip,
  Button,
  Toast,
  ToastProps,
  Alert,
} from "daisyui-react";
import React from "react";

export default function App() {
  const [color, setColor] = React.useState<ToastProps["color"]>();
  const [horizontal, setHorizontal] =
    React.useState<ToastProps["horizontal"]>();
  const [vertical, setVertical] = React.useState<ToastProps["vertical"]>();

  return (
    <>
      <div className="flex flex-wrap gap-8">
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
        <Toast horizontal={horizontal} vertical={vertical} className="absolute">
          <Alert color="info">New message arrived.</Alert>
        </Toast>
      </div>
    </>
  );
}
