import { Select, Form, Divider, DividerProps, Toggle } from "daisyui-react";
import React from "react";
import { twMerge } from "tailwind-merge";

export default function App() {
  const [color, setColor] = React.useState<DividerProps["color"]>();
  const [direction, setDirection] = React.useState<DividerProps["direction"]>();
  const [position, setPosition] = React.useState<DividerProps["position"]>();
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
        <Form.Control label="Direction">
          <Select
            onChange={(value) => setDirection(value as any)}
            items={["vertical", "horizontal"]}
          />
        </Form.Control>
        <Form.Control label="Position">
          <Select
            onChange={(value) => setPosition(value as any)}
            items={["start", "center", "end"]}
          />
        </Form.Control>
      </div>

      <Divider>Preview</Divider>

      <div className="flex justify-center">
        <Divider
          color={color}
          position={position}
          direction={direction}
          className={twMerge(direction === "horizontal" ? "h-32" : "w-full")}
        >
          Divider
        </Divider>
      </div>
    </>
  );
}
