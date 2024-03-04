import {
  Toggle,
  Form,
  Divider,
  Select,
  Checkbox,
  FileInputProps,
  FileInput,
} from "daisyui-react";
import React from "react";

export default function App() {
  const [color, setColor] = React.useState<FileInputProps["color"]>();
  const [size, setSize] = React.useState<FileInputProps["size"]>();
  const [disabled, setDisabled] = React.useState(false);

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
      </div>

      <Divider>Preview</Divider>

      <div className="flex justify-center">
        <Form.Control label="Pick a file" labelAlt="Alt label">
          <FileInput size={size} color={color} disabled={disabled} />
        </Form.Control>
      </div>
    </>
  );
}
