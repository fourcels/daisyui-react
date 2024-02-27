import {
  Select,
  Form,
  Divider,
  Alert,
  AlertProps,
  Button,
} from "daisyui-react";
import React from "react";

export default function App() {
  const [color, setColor] = React.useState<AlertProps["color"]>();

  return (
    <>
      <div className="flex flex-wrap gap-8">
        <Form.Control label="Color">
          <Select
            onChange={(value) => setColor(value as any)}
            items={["info", "success", "warning", "error"]}
          />
        </Form.Control>
      </div>

      <Divider>Preview</Divider>

      <div className="flex justify-center">
        <Alert
          color={color}
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="stroke-current shrink-0 w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          }
          actions={<Button size="sm">See</Button>}
        >
          <div>
            <h3 className="font-bold">New message!</h3>
            <div className="text-xs">You have 1 unread message</div>
          </div>
        </Alert>
      </div>
    </>
  );
}
