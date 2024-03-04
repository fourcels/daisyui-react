import {
  Select,
  Form,
  Divider,
  Collapse,
  CollapseProps,
  Toggle,
} from "daisyui-react";
import React from "react";

export default function App() {
  const [arrow, setArrow] = React.useState<CollapseProps["arrow"]>();
  const [open, setOpen] = React.useState(false);
  const [bordered, setBordered] = React.useState(true);

  return (
    <>
      <div className="flex flex-wrap gap-8">
        <Form.Control label="Arrow">
          <Select
            onChange={(value) => setArrow(value as any)}
            items={["arrow", "plus"]}
          />
        </Form.Control>
        <Toggle
          label="Force open"
          checked={open}
          onChange={(checked) => setOpen(checked)}
        />
        <Toggle
          label="Bordered"
          checked={bordered}
          onChange={(checked) => setBordered(checked)}
        />
      </div>

      <Divider>Preview</Divider>

      <div className="flex justify-center">
        <Collapse arrow={arrow} open={open} bordered={bordered}>
          <Collapse.Title>Click me to show/hide content</Collapse.Title>
          <Collapse.Content>
            <p>hello</p>
          </Collapse.Content>
        </Collapse>
      </div>
    </>
  );
}
