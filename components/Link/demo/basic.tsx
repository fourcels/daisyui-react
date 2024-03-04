import {
  Select,
  Form,
  TooltipProps,
  Divider,
  Toggle,
  Tooltip,
  Button,
  LinkProps,
  Link,
} from "daisyui-react";
import React from "react";

export default function App() {
  const [color, setColor] = React.useState<LinkProps["color"]>();
  const [hover, setHover] = React.useState(false);

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
        <Toggle
          label="Hover"
          checked={hover}
          onChange={(checked) => setHover(checked)}
        />
      </div>

      <Divider>Preview</Divider>

      <div className="flex justify-center">
        <Link hover={hover} color={color}>
          I'm a simple link
        </Link>
      </div>
    </>
  );
}
