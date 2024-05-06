import {
  Select,
  Form,
  Divider,
  Toggle,
  BadgeProps,
  Badge,
} from "daisyui-react";
import React from "react";

export default function App() {
  const [color, setColor] = React.useState<BadgeProps["color"]>();
  const [size, setSize] = React.useState<BadgeProps["size"]>();
  const [outline, setOutline] = React.useState(false);

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
              "ghost",
            ]}
          />
        </Form.Control>
        <Form.Control label="Size">
          <Select
            onChange={(value) => setSize(value as any)}
            items={["xs", "sm", "md", "lg"]}
          />
        </Form.Control>
        <Toggle label="Outline" onChange={(checked) => setOutline(checked)} />
      </div>

      <Divider>Preview</Divider>

      <div className="flex justify-center">
        <Badge color={color} size={size} outline={outline}>
          Badge
        </Badge>
      </div>
    </>
  );
}
