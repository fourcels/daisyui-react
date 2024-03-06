import {
  Select,
  Form,
  Divider,
  Toggle,
  InputProps,
  Input,
} from "daisyui-react";
import React from "react";

export default function App() {
  const [color, setColor] = React.useState<InputProps["color"]>();
  const [size, setSize] = React.useState<InputProps["size"]>();
  const [bordered, setBordered] = React.useState(true);
  const [disabled, setDisabled] = React.useState(false);
  const [clearable, setClearable] = React.useState(true);

  return (
    <>
      <div className="flex flex-wrap gap-8">
        <Form.Control label="Color">
          <Select
            onChange={(value) => setColor(value as any)}
            items={[
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
        <Toggle
          label="Bordered"
          checked={bordered}
          onChange={(checked) => setBordered(checked)}
        />
        <Toggle
          label="Disabled"
          checked={disabled}
          onChange={(checked) => setDisabled(checked)}
        />
        <Toggle
          label="Clearable"
          checked={clearable}
          onChange={(checked) => setClearable(checked)}
        />
      </div>

      <Divider>Preview</Divider>

      <div className="flex justify-center">
        <Form.Control label="What is your name?" className="w-full max-w-xs">
          <Input
            clearable={clearable}
            color={color}
            size={size}
            bordered={bordered}
            disabled={disabled}
            placeholder="Type here"
            className="w-full max-w-xs"
            end={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            }
          />
        </Form.Control>
      </div>
    </>
  );
}
