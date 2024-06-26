import { Select, Form, Divider, ProgressProps, Progress } from "daisyui-react";
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
        <Progress color={color} value={50} max={100} />
      </div>
    </>
  );
}
