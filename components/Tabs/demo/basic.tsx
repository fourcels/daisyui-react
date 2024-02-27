import {
  Divider,
  Toggle,
  Form,
  Select,
  Steps,
  StepsProps,
  Tabs,
  TabsProps,
} from "daisyui-react";
import React from "react";

export default function App() {
  const [size, setSize] = React.useState<TabsProps["size"]>();
  const [variant, setVariant] = React.useState<TabsProps["variant"]>();
  return (
    <>
      <div className="flex gap-4">
        <Form.Control label="Size">
          <Select
            onChange={(value) => setSize(value as any)}
            items={["xs", "sm", "md", "lg"]}
          />
        </Form.Control>
        <Form.Control label="Variant">
          <Select
            onChange={(value) => setVariant(value as any)}
            items={["bordered", "lifted", "boxed"]}
          />
        </Form.Control>
      </div>

      <Divider>Preview</Divider>

      <div className="flex justify-center">
        <Tabs size={size} variant={variant}>
          <Tabs.Tab label="tab 1">Tab 1</Tabs.Tab>
          <Tabs.Tab label="tab 2">Tab 2</Tabs.Tab>
          <Tabs.Tab label="tab 3">Tab 3</Tabs.Tab>
        </Tabs>
      </div>
    </>
  );
}
