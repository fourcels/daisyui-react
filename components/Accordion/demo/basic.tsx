import {
  Select,
  Form,
  Divider,
  Toggle,
  Accordion,
  AccordionProps,
} from "daisyui-react";
import React from "react";

export default function App() {
  const [icon, setIcon] = React.useState<AccordionProps["icon"]>();
  const [bordered, setBordered] = React.useState(true);
  const [join, setJoin] = React.useState(false);

  return (
    <>
      <div className="flex flex-wrap gap-8">
        <Form.Control label="Icon">
          <Select
            onChange={(value) => setIcon(value as any)}
            items={["arrow", "plus"]}
          />
        </Form.Control>
        <Toggle
          label="Bordered"
          checked={bordered}
          onChange={(checked) => setBordered(checked)}
        />
        <Toggle
          label="Join"
          checked={join}
          onChange={(checked) => setJoin(checked)}
        />
      </div>

      <Divider>Preview</Divider>

      <div className="flex justify-center">
        <Accordion
          className="w-full max-w-md"
          icon={icon}
          bordered={bordered}
          join={join}
        >
          <Accordion.Item title="Click to open this one and close others">
            <p>hello</p>
          </Accordion.Item>
          <Accordion.Item title="Click to open this one and close others">
            <p>hello</p>
          </Accordion.Item>
          <Accordion.Item title="Click to open this one and close others">
            <p>hello</p>
          </Accordion.Item>
          <Accordion.Item title="Click to open this one and close others">
            <p>hello</p>
          </Accordion.Item>
          <Accordion.Item title="Click to open this one and close others">
            <p>hello</p>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
}
