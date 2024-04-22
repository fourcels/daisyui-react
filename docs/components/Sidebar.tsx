import { Link, useLocation } from "react-router-dom";
import { Button, Menu } from "daisyui-react";
import React from "react";
import { throttle } from "lodash";
import { twMerge } from "tailwind-merge";
import { Page, pages } from "./pages";

function MenuItem({ data }: { data: Page }) {
  const location = useLocation();
  if (!data.name) {
    return <Menu.Item />;
  }

  if (data.collapsible) {
    return (
      <Menu.Item>
        <Menu.Details
          label={data.name}
          icon={
            data.icon && (
              <div
                className="text-base-content"
                dangerouslySetInnerHTML={{ __html: data.icon }}
              ></div>
            )
          }
          open
        >
          {data.items?.map((item) => (
            <MenuItem key={item.name} data={item} />
          ))}
        </Menu.Details>
      </Menu.Item>
    );
  } else if (data.items) {
    return (
      <Menu.Item>
        <Menu.Title
          icon={
            data.icon && (
              <div
                className="text-base-content"
                dangerouslySetInnerHTML={{ __html: data.icon }}
              ></div>
            )
          }
          className="px-1.5"
        >
          {data.name}
        </Menu.Title>
        <Menu>
          {data.items?.map((item) => (
            <MenuItem key={item.name} data={item} />
          ))}
        </Menu>
      </Menu.Item>
    );
  } else {
    return (
      <Menu.Item active={location.pathname === data.href}>
        <Link
          to={data.href!}
          target={data.target === "blank" ? "_blank" : undefined}
          className="group"
        >
          {data.icon && (
            <div
              className="text-base-content"
              dangerouslySetInnerHTML={{ __html: data.icon }}
            ></div>
          )}
          {data.name}
          {data.target === "blank" && (
            <svg
              width="12"
              height="12"
              className="opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 11H37V29"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="butt"
                strokeLinejoin="bevel"
              />
              <path
                d="M11.5439 36.4559L36.9997 11"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="butt"
                strokeLinejoin="bevel"
              />
            </svg>
          )}
        </Link>
      </Menu.Item>
    );
  }
}

export function Sidebar({ className }: { className?: string }) {
  const elemRef = React.useRef<HTMLDivElement>(null);
  const [shadow, setShadow] = React.useState(false);

  React.useEffect(() => {
    const elem = elemRef.current;
    if (!elem) {
      return;
    }

    const handleScroll = throttle(() => {
      setShadow(elem.scrollTop > 50 ? true : false);
    }, 200);

    elem.addEventListener("scroll", handleScroll);
    return () => elem.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={elemRef}
      className={twMerge(
        "h-full w-72 overflow-y-scroll overscroll-contain",
        className
      )}
    >
      <div
        className={twMerge(
          "bg-base-100/90 sticky top-0 z-20 hidden items-center gap-2 px-4 py-2 backdrop-blur lg:flex transition-shadow [transform:translateZ(0)]",
          shadow && "shadow-sm"
        )}
      >
        <Button
          color="ghost"
          className="font-title font-bold inline-flex text-lg md:text-2xl px-2"
          startIcon={
            <svg
              className="h-6 w-6 md:h-8 md:w-8"
              width="32"
              height="32"
              viewBox="0 0 415 415"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="82.5"
                y="290"
                width="250"
                height="125"
                rx="62.5"
                fill="#1AD1A5"
              />
              <circle
                cx="207.5"
                cy="135"
                r="130"
                fill="black"
                fillOpacity=".3"
              />
              <circle cx="207.5" cy="135" r="125" fill="white" />
              <circle cx="207.5" cy="135" r="56" fill="#FF9903" />
            </svg>
          }
        >
          daisyUI
        </Button>
      </div>
      <Menu>
        {pages.map((item, i) => (
          <MenuItem key={i} data={item} />
        ))}
      </Menu>
      <div className="bg-base-100 pointer-events-none sticky bottom-0 flex h-40 [mask-image:linear-gradient(transparent,#000000)]"></div>
    </div>
  );
}
