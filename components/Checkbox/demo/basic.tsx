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
  const [reverse, setReverse] = React.useState(false);
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

        <Toggle
          label="Reverse"
          checked={reverse}
          onChange={(e) => setReverse(e.target.checked)}
        />
        <Toggle
          label="Indeterminate"
          checked={indeterminate}
          onChange={(e) => setIndeterminate(e.target.checked)}
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
        />
      </div>
    </>
  );
}
