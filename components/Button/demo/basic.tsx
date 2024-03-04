import {
  Select,
  Form,
  ButtonProps,
  Divider,
  Toggle,
  Button,
} from "daisyui-react";
import React from "react";

export default function App() {
  const [color, setColor] = React.useState<ButtonProps["color"]>();
  const [size, setSize] = React.useState<ButtonProps["size"]>();
  const [variant, setVariant] = React.useState<ButtonProps["variant"]>();
  const [shape, setShape] = React.useState<ButtonProps["shape"]>();
  const [disabled, setDisabled] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const [wide, setWide] = React.useState(false);
  const [block, setBlock] = React.useState(false);
  const [glass, setGlass] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [animation, setAnimation] = React.useState(true);

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
        <Form.Control label="Variant">
          <Select
            onChange={(value) => setVariant(value as any)}
            items={["outline", "link"]}
          />
        </Form.Control>
        <Form.Control label="Shape">
          <Select
            onChange={(value) => setShape(value as any)}
            items={["square", "circle"]}
          />
        </Form.Control>
        <Toggle label="Glass" onChange={(checked) => setGlass(checked)} />
        <Toggle label="Wide" onChange={(checked) => setWide(checked)} />
        <Toggle label="Block" onChange={(checked) => setBlock(checked)} />
        <Toggle label="Active" onChange={(checked) => setActive(checked)} />
        <Toggle label="Disabled" onChange={(checked) => setDisabled(checked)} />
        <Toggle label="Loading" onChange={(checked) => setLoading(checked)} />
        <Toggle
          label="Animation"
          defaultChecked
          onChange={(checked) => setAnimation(checked)}
        />
      </div>

      <Divider>Preview</Divider>

      <div className="flex justify-center">
        <Button
          color={color}
          size={size}
          variant={variant}
          shape={shape}
          disabled={disabled}
          active={active}
          wide={wide}
          block={block}
          glass={glass}
          loading={loading}
          animation={animation}
        >
          Button
        </Button>
      </div>
    </>
  );
}
