import {
  Select,
  Form,
  Divider,
  Toggle,
  InputProps,
  Input,
} from "daisyui-react";
import React from "react";

export default function App() {
  const [color, setColor] = React.useState<InputProps["color"]>();
  const [size, setSize] = React.useState<InputProps["size"]>();
  const [bordered, setBordered] = React.useState(true);
  const [disabled, setDisabled] = React.useState(false);

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
              "ghost",
            ]}
          />
        </Form.Control>
        <Form.Control label="Size">
          <Select
            onChange={(value) => setSize(value as any)}
            items={["xs", "sm", "md", "lg"]}
          />
        </Form.Control>
        <Toggle
          label="Bordered"
          checked={bordered}
          onChange={(e) => setBordered(e.target.checked)}
        />
        <Toggle
          label="Disabled"
          checked={disabled}
          onChange={(e) => setDisabled(e.target.checked)}
        />
      </div>

      <Divider>Preview</Divider>

      <div className="flex justify-center">
        <Form.Control label="What is your name?" className="w-full max-w-xs">
          <Input
            color={color}
            size={size}
            bordered={bordered}
            disabled={disabled}
            placeholder="Type here"
            className="w-full max-w-xs"
          />
        </Form.Control>
      </div>
    </>
  );
}
