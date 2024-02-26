import {
  Select,
  Form,
  TooltipProps,
  Divider,
  Toggle,
  Tooltip,
  Button,
  BottomNavigationProps,
  BottomNavigation,
} from "daisyui-react";
import React from "react";

export default function App() {
  const [color, setColor] = React.useState<BottomNavigationProps["color"]>();
  const [size, setSize] = React.useState<BottomNavigationProps["size"]>();
  const [active, setActive] = React.useState(false);
  const [disabled, setDisabled] = React.useState(false);

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
          label="Active"
          checked={active}
          onChange={(e) => setActive(e.target.checked)}
        />
        <Toggle
          label="Disabled"
          checked={disabled}
          onChange={(e) => setDisabled(e.target.checked)}
        />
      </div>

      <Divider>Preview</Divider>

      <div className="flex justify-center">
        <BottomNavigation
          color={color}
          size={size}
          className="relative bg-base-200"
        >
          <BottomNavigation.Item
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            }
          >
            Home
          </BottomNavigation.Item>
          <BottomNavigation.Item
            active={active}
            disabled={disabled}
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            }
          >
            Warnings
          </BottomNavigation.Item>
          <BottomNavigation.Item
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            }
          >
            Statics
          </BottomNavigation.Item>
        </BottomNavigation>
      </div>
    </>
  );
}
