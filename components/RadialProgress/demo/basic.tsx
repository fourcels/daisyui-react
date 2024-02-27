import {
  Select,
  Form,
  Divider,
  Alert,
  AlertProps,
  Button,
  ProgressProps,
  Progress,
  RadialProgress,
} from "daisyui-react";
import React from "react";

export default function App() {
  const [color, setColor] = React.useState<ProgressProps["color"]>();

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
      </div>

      <Divider>Preview</Divider>

      <div className="flex justify-center">
        <RadialProgress color={color} value={70} />
      </div>
    </>
  );
}
