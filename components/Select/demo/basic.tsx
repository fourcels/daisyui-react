import { Select, Form, SelectProps, Divider, Toggle } from "daisyui-react";
import React from "react";

export default function App() {
  const [color, setColor] = React.useState<SelectProps["color"]>();
  const [size, setSize] = React.useState<SelectProps["size"]>();
  const [bordered, setBordered] = React.useState(true);
  const [disabled, setDisabled] = React.useState(false);
  const [clearable, setClearable] = React.useState(true);

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
          onChange={(checked) => setBordered(checked)}
        />
        <Toggle
          label="Disabled"
          checked={disabled}
          onChange={(checked) => setDisabled(checked)}
        />
        <Toggle
          label="Clearable"
          checked={clearable}
          onChange={(checked) => setClearable(checked)}
        />
      </div>

      <Divider>Preview</Divider>

      <div className="flex justify-center">
        <Form.Control label="Simpson">
          <Select
            clearable={clearable}
            color={color}
            size={size}
            bordered={bordered}
            disabled={disabled}
            placeholder="Pick your favorite Simpson"
            items={["Homer", "Marge", "Bart", "Lisa", "Maggie"]}
          />
        </Form.Control>
      </div>
    </>
  );
}
