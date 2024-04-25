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
  const [step, setStep] = React.useState(0);
  const [measure, setMeasure] = React.useState(false);
  const [label, setLabel] = React.useState(false);

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
        <Form.Control label="Step">
          <Range
            size="sm"
            step={5}
            max={25}
            value={step}
            label
            onChange={(value) => setStep(value)}
          />
        </Form.Control>
        <Toggle
          label="Measure"
          checked={measure}
          onChange={(checked) => setMeasure(checked)}
        />
        <Toggle
          label="Label"
          checked={label}
          onChange={(checked) => setLabel(checked)}
        />
      </div>

      <Divider>Preview</Divider>

      <div className="flex flex-col items-center">
        <Range
          label={label}
          size={size}
          color={color}
          measure={measure}
          step={step}
        />
      </div>
    </>
  );
}
