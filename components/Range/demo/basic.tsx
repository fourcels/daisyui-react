import {
  Form,
  Divider,
  Select,
  RadioProps,
  Range,
  Toggle,
} from "daisyui-react";
import React from "react";

export default function App() {
  const [color, setColor] = React.useState<RadioProps["color"]>();
  const [size, setSize] = React.useState<RadioProps["size"]>();
  const [measure, setMeasure] = React.useState(true);

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
          label="Measure"
          checked={measure}
          onChange={(checked) => setMeasure(checked)}
        />
      </div>

      <Divider>Preview</Divider>

      <div className="flex flex-col items-center">
        <Range size={size} color={color} measure={measure} />
      </div>
    </>
  );
}
