import {
  Select,
  Form,
  Divider,
  Indicator,
  Badge,
  IndicatorProps,
} from "daisyui-react";
import React from "react";

export default function App() {
  const [horizontal, setHorizontal] =
    React.useState<IndicatorProps["horizontal"]>();
  const [vertical, setVertical] = React.useState<IndicatorProps["vertical"]>();

  return (
    <>
      <div className="flex flex-wrap gap-8">
        <Form.Control label="Horizontal">
          <Select
            onChange={(value) => setHorizontal(value as any)}
            items={["start", "center", "end"]}
          />
        </Form.Control>
        <Form.Control label="Vertical">
          <Select
            onChange={(value) => setVertical(value as any)}
            items={["top", "middle", "bottom"]}
          />
        </Form.Control>
      </div>

      <Divider>Preview</Divider>

      <div className="flex justify-center">
        <Indicator
          horizontal={horizontal}
          vertical={vertical}
          indicator={<Badge color="secondary" />}
        >
          <div className="grid w-32 h-32 bg-base-300 place-items-center">
            content
          </div>
        </Indicator>
      </div>
    </>
  );
}
