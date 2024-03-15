import { Button, Drawer, Input, Kbd, Navbar } from "daisyui-react";
import { throttle } from "lodash";
import React from "react";
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
        <Input
          className="hidden lg:flex"
          color="ghost"
          bordered={false}
          placeholder="Search..."
          start={
            <svg
              stroke="currentColor"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          }
          end={
            <>
              <Kbd size="sm">⌘</Kbd>
              <Kbd size="sm">K</Kbd>
            </>
          }
        />
      </div>
    </Navbar>
  );
}
