import {
  Toggle,
  Form,
  Divider,
  Select,
  CheckboxProps,
  Checkbox,
} from "daisyui-react";
import React from "react";

export default function App() {
  const [color, setColor] = React.useState<CheckboxProps["color"]>();
  const [size, setSize] = React.useState<CheckboxProps["size"]>();
  const [disabled, setDisabled] = React.useState(false);
  const [reverse, setReverse] = React.useState(false);
  const [indeterminate, setIndeterminate] = React.useState(false);
  return (
    <>
      <div className="flex flex-wrap gap-4">
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
        <Toggle
          label="Disabled"
          checked={disabled}
          onChange={(checked) => setDisabled(checked)}
        />
        <Toggle
          label="Reverse"
          checked={reverse}
          onChange={(checked) => setReverse(checked)}
        />
        <Toggle
          label="Indeterminate"
          checked={indeterminate}
          onChange={(checked) => setIndeterminate(checked)}
        />
      </div>

      <Divider>Preview</Divider>

      <div className="flex justify-center">
        <Checkbox
          indeterminate={indeterminate}
          reverse={reverse}
          label="Checkbox"
          size={size}
          color={color}
          disabled={disabled}
        />
      </div>
    </>
  );
}
