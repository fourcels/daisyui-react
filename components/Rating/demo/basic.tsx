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
  const [mask, setMask] = React.useState<RatingProps["mask"]>();
  const [size, setSize] = React.useState<RatingProps["size"]>();
  const [half, setHalf] = React.useState(false);

  return (
    <>
      <div className="flex gap-4">
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
          label="Half"
          checked={half}
          onChange={(e) => setHalf(e.target.checked)}
        />
      </div>

      <Divider>Preview</Divider>

      <div className="flex flex-col items-center">
        <Rating
          half={half}
          mask={mask}
          size={size}
          itemClassName="bg-orange-400"
        />
      </div>
    </>
  );
}
