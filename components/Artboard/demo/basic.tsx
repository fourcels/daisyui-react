import {
  Select,
  Form,
  Divider,
  Artboard,
  ArtboardProps,
  Toggle,
} from "daisyui-react";
import React from "react";
import { twMerge } from "tailwind-merge";

const sizes = {
  "phone-1": { x: 320, y: 568 },
  "phone-2": { x: 375, y: 667 },
  "phone-3": { x: 414, y: 736 },
  "phone-4": { x: 375, y: 812 },
  "phone-5": { x: 414, y: 896 },
  "phone-6": { x: 320, y: 1024 },
};
export default function App() {
  const [size, setSize] = React.useState<ArtboardProps["size"]>();
  const [horizontal, setHorizontal] = React.useState(false);
  const content = React.useMemo(() => {
    const item = size ? sizes[size] : sizes["phone-1"];
    if (horizontal) {
      return `${item.y}×${item.x}`;
    } else {
      return `${item.x}×${item.y}`;
    }
  }, [size, horizontal]);
  return (
    <>
      <div className="flex flex-wrap gap-8">
        <Form.Control label="Size">
          <Select
            onChange={(value) => setSize(value as any)}
            items={[
              "phone-1",
              "phone-2",
              "phone-3",
              "phone-4",
              "phone-5",
              "phone-6",
            ]}
          />
        </Form.Control>
        <Toggle
          label="Horizontal"
          onChange={(checked) => setHorizontal(checked)}
        />
      </div>

      <Divider>Preview</Divider>

      <div className={twMerge("flex justify-center ")}>
        <div className="max-h-[600px] overflow-x-auto">
          <Artboard size={size} horizontal={horizontal}>
            {content}
          </Artboard>
        </div>
      </div>
    </>
  );
}
