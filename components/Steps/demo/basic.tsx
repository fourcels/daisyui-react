import {
  Divider,
  Toggle,
  Form,
  Select,
  Steps,
  StepsProps,
} from "daisyui-react";
import React from "react";

export default function App() {
  const [color, setColor] = React.useState<StepsProps["color"]>();
  const [vertical, setVertical] = React.useState(false);
  const [responsive, setResponsive] = React.useState(false);
  return (
    <>
      <div className="flex gap-4">
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
          label="Vertical"
          checked={vertical}
          onChange={(e) => setVertical(e.target.checked)}
        />
        <Toggle
          label="Responsive"
          checked={responsive}
          onChange={(e) => setResponsive(e.target.checked)}
        />
      </div>

      <Divider>Preview</Divider>

      <div className="flex justify-center">
        <Steps color={color} vertical={vertical} responsive={responsive}>
          <Steps.Step color="primary">Register</Steps.Step>
          <Steps.Step color="primary">Choose plan</Steps.Step>
          <Steps.Step>Purchase</Steps.Step>
          <Steps.Step>Receive Product</Steps.Step>
        </Steps>
      </div>
    </>
  );
}
