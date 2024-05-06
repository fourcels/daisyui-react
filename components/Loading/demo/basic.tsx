import { Select, Form, Divider, LoadingProps, Loading } from "daisyui-react";
import React from "react";

export default function App() {
  const [size, setSize] = React.useState<LoadingProps["size"]>();
  const [color, setColor] = React.useState<LoadingProps["color"]>();
  const [variant, setVariant] = React.useState<LoadingProps["variant"]>();

  return (
    <>
      <div className="flex flex-wrap gap-8">
        <Form.Control label="Color">
          <Select
            onChange={(value) => setColor(value as any)}
            items={[
              "neutral",
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
        <Form.Control label="Variant">
          <Select
            onChange={(value) => setVariant(value as any)}
            items={["spinner", "dots", "ring", "ball", "bars", "infinity"]}
          />
        </Form.Control>
        <Form.Control label="Size">
          <Select
            onChange={(value) => setSize(value as any)}
            items={["xs", "sm", "md", "lg"]}
          />
        </Form.Control>
      </div>

      <Divider>Preview</Divider>

      <div className="flex justify-center">
        <Loading size={size} color={color} variant={variant} />
      </div>
    </>
  );
}
