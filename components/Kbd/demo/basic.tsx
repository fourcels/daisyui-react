import { Divider, KbdProps, Form, Select, Kbd } from "daisyui-react";
import React from "react";

export default function App() {
  const [size, setSize] = React.useState<KbdProps["size"]>();
  return (
    <div>
      <div className="flex flex-wrap gap-8">
        <Form.Control label="Size">
          <Select
            onChange={(value) => setSize(value as any)}
            items={["xs", "sm", "md", "lg"]}
          />
        </Form.Control>
      </div>
      <Divider>Preview</Divider>

      <div className="flex justify-center">
        <Kbd size={size}>A</Kbd>
      </div>
    </div>
  );
}
