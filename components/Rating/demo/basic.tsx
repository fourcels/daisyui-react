import {
  Form,
  Divider,
  Select,
  RadioProps,
  Range,
  Toggle,
  Rating,
  RatingProps,
} from "daisyui-react";
import React from "react";

export default function App() {
  const [color, setColor] = React.useState<RatingProps["color"]>();
  const [mask, setMask] = React.useState<RatingProps["mask"]>();
  const [size, setSize] = React.useState<RatingProps["size"]>();
  const [readonly, setReadonly] = React.useState(false);
  const [half, setHalf] = React.useState(false);
  const [clearable, setClearable] = React.useState(true);

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
        <Form.Control label="Mask">
          <Select
            onChange={(value) => setMask(value as any)}
            items={[
              "squircle",
              "heart",
              "decagon",
              "pentagon",
              "diamond",
              "square",
              "circle",
              "hexagon",
              "hexagon-2",
              "parallelogram",
              "parallelogram-2",
              "parallelogram-3",
              "parallelogram-4",
              "star",
              "star-2",
              "triangle",
              "triangle-2",
              "triangle-3",
              "triangle-4",
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
          label="Readonly"
          checked={readonly}
          onChange={(checked) => setReadonly(checked)}
        />
        <Toggle
          label="Half"
          checked={half}
          onChange={(checked) => setHalf(checked)}
        />
        <Toggle
          label="Clearable"
          checked={clearable}
          onChange={(checked) => setClearable(checked)}
        />
      </div>

      <Divider>Preview</Divider>

      <div className="flex flex-col items-center">
        <Rating
          readonly={readonly}
          defaultValue={2}
          color={color}
          clearable={clearable}
          half={half}
          mask={mask}
          size={size}
        />
      </div>
    </>
  );
}
