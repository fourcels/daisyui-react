import {
  Form,
  Divider,
  Select,
  Range,
  Toggle,
  TextareaProps,
  Textarea,
} from "daisyui-react";
import React from "react";

export default function App() {
  const [color, setColor] = React.useState<TextareaProps["color"]>();
  const [size, setSize] = React.useState<TextareaProps["size"]>();
  const [bordered, setBordered] = React.useState(true);
  const [disabled, setDisabled] = React.useState(false);

  return (
    <>
      <div className="flex gap-4">
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
          onChange={(checked) => setBordered(checked)}
        />
        <Toggle
          label="Disabled"
          checked={disabled}
          onChange={(checked) => setDisabled(checked)}
        />
      </div>

      <Divider>Preview</Divider>

      <div className="flex flex-col items-center">
        <Textarea
          placeholder="Bio"
          size={size}
          color={color}
          bordered={bordered}
          disabled={disabled}
          className="w-full max-w-xs"
        />
      </div>
    </>
  );
}
