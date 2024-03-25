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
  const [icon, setIcon] = React.useState<CollapseProps["icon"]>();
  const [open, setOpen] = React.useState(false);
  const [bordered, setBordered] = React.useState(true);

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
        <Collapse
          icon={icon}
          open={open}
          bordered={bordered}
          title="Click me to show/hide content"
        >
          <p>hello</p>
        </Collapse>
      </div>
    </>
  );
}
