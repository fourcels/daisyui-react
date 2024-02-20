import {
  Select,
  Form,
  Divider,
  Toggle,
  Button,
  DropdownProps,
  Dropdown,
  Menu,
  Navbar,
} from "daisyui-react";
import React from "react";

export default function App() {
  const [shadow, setShadow] = React.useState(false);
  const [rounded, setRounded] = React.useState(false);

  return (
    <>
      <div className="flex flex-wrap gap-8">
        <Toggle
          label="shadow"
          checked={shadow}
          onChange={(e) => setShadow(e.target.checked)}
        />
        <Toggle
          label="rounded"
          checked={rounded}
          onChange={(e) => setRounded(e.target.checked)}
        />
      </div>

      <Divider>Preview</Divider>

      <div className="flex justify-center">
        <Navbar shadow={shadow} rounded={rounded} className="bg-base-200">
          <Navbar.Start>
            <Button shape="square" color="ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-5 h-5 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </Button>
          </Navbar.Start>
          <Navbar.Center>
            <Button color="ghost" className="text-xl">
              daisyUI
            </Button>
          </Navbar.Center>
          <Navbar.End>
            <Button color="ghost" shape="square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-5 h-5 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                ></path>
              </svg>
            </Button>
          </Navbar.End>
        </Navbar>
      </div>
    </>
  );
}
