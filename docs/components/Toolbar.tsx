import { Button, Drawer, Navbar } from "daisyui-react";
import { throttle } from "lodash";
import React from "react";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

export function Toolbar() {
  const [shadow, setShadow] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = throttle(() => {
      setShadow(document.documentElement.scrollTop > 50 ? true : false);
    }, 200);

    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar
      className={twMerge(
        "px-4 sticky top-0 backdrop-blur bg-base-100/90 z-20 transition-shadow [transform:translateZ(0)]",
        shadow && "shadow-sm"
      )}
    >
      <div className="flex flex-1 gap-2">
        <Drawer.Toggle>
          <Button shape="square" color="ghost" className="lg:hidden">
            <svg
              width="20"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-5 w-5 stroke-current md:h-6 md:w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </Button>
        </Drawer.Toggle>
      </div>
      <div className="flex gap-4">
        <Link to="/components/">
          <Button color="ghost">Components</Button>
        </Link>
        <Link to="https://github.com/fourcels/daisyui-react" target="_blank">
          <Button color="ghost" shape="square">
            <svg
              viewBox="0 0 16 16"
              className="w-5 h-5"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
            </svg>
          </Button>
        </Link>
      </div>
    </Navbar>
  );
}
