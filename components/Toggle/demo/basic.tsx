import { Toggle, Form, ToggleProps, Divider, Select } from "daisyui-react";
import React from "react";

export default function App() {
  const [color, setColor] = React.useState<ToggleProps["color"]>();
  const [size, setSize] = React.useState<ToggleProps["size"]>();
  const [reverse, setReverse] = React.useState(false);
  const [disabled, setDisabled] = React.useState(false);
  const [indeterminate, setIndeterminate] = React.useState(false);
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
            ]}
          />
        </Form.Control>
        <Form.Control label="Size">
          <Select
            onChange={(value) => setSize(value as any)}
            items={["xs", "sm", "md", "lg"]}
          />
        </Form.Control>

        <Toggle label="Reverse" onChange={(val) => setReverse(val)} />
        <Toggle label="Disabled" onChange={(val) => setDisabled(val)} />
        <Toggle
          label="Indeterminate"
          onChange={(val) => setIndeterminate(val)}
        />
      </div>

      <Divider>Preview</Divider>

      <div className="flex justify-center">
        <Toggle
          disabled={disabled}
          indeterminate={indeterminate}
          reverse={reverse}
          label="Remember me"
          size={size}
          color={color}
        />
      </div>
    </>
  );
}
