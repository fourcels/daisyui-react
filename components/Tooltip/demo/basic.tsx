import {
  Select,
  Form,
  TooltipProps,
  Divider,
  Toggle,
  Tooltip,
  Button,
} from "daisyui-react";
import React from "react";

export default function App() {
  const [color, setColor] = React.useState<TooltipProps["color"]>();
  const [position, setPosition] = React.useState<TooltipProps["position"]>();
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <div className="flex flex-wrap gap-8">
        <Form.Control label="Color">
          <Select
            onChange={(value) => setColor(value as any)}
            items={[
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
        <Form.Control label="Position">
          <Select
            onChange={(value) => setPosition(value as any)}
            items={["top", "bottom", "left", "right"]}
          />
        </Form.Control>
        <Toggle
          label="Force open"
          checked={open}
          onChange={(e) => setOpen(e.target.checked)}
        />
      </div>

      <Divider>Preview</Divider>

      <div className="flex justify-center">
        <Tooltip title="hello" color={color} position={position} open={open}>
          <Button>Hover me</Button>
        </Tooltip>
      </div>
    </>
  );
}
