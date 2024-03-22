import { Select, Form, Divider, DividerProps, Toggle } from "daisyui-react";
import React from "react";
import { twMerge } from "tailwind-merge";

export default function App() {
  const [color, setColor] = React.useState<DividerProps["color"]>();
  const [direction, setDirection] = React.useState<DividerProps["direction"]>();
  const [position, setPosition] = React.useState<DividerProps["position"]>();
  const [responsive, setResponsive] = React.useState(false);
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
        <Toggle
          label="Responsive"
          onChange={(checked) => setResponsive(checked)}
        />
      </div>

      <Divider>Preview</Divider>

      <div
        className={twMerge(
          "flex flex-col w-full",
          direction === "horizontal" && "flex-row",
          responsive && "lg:flex-row"
        )}
      >
        <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
          Content
        </div>
        <Divider
          color={color}
          position={position}
          direction={direction}
          responsive={responsive}
        >
          OR
        </Divider>
        <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
          Content
        </div>
      </div>
    </>
  );
}
