import { Link, useLocation } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { Menu } from "../../components/Menu";

type Component = {
  path: string;
  name: string;
};

const components: Component[] = [
  {
    name: "Button",
    path: "/components/button",
  },
  {
    name: "Toggle",
    path: "/components/toggle",
  },
  {
    name: "Tooltip",
    path: "/components/tooltip",
  },
  {
    name: "Menu",
    path: "/components/menu",
  },
  {
    name: "Dropdown",
    path: "/components/dropdown",
  },
  {
    name: "Card",
    path: "/components/card",
  },
  {
    name: "Badge",
    path: "/components/badge",
  },
  {
    name: "Divider",
    path: "/components/divider",
  },
  {
    name: "Navbar",
    path: "/components/navbar",
  },
  {
    name: "Modal",
    path: "/components/modal",
  },
  {
    name: "Swap",
    path: "/components/swap",
  },
  {
    name: "Theme Controller",
    path: "/components/theme-controller",
  },
  {
    name: "Join (group items)",
    path: "/components/join",
  },
  {
    name: "Checkbox",
    path: "/components/checkbox",
  },
  {
    name: "Radio",
    path: "/components/radio",
  },
  {
    name: "Range",
    path: "/components/range",
  },
  {
    name: "File Input",
    path: "/components/file-input",
  },
  {
    name: "Text Input",
    path: "/components/input",
  },
  {
    name: "Select",
    path: "/components/select",
  },
  {
    name: "Collapse",
    path: "/components/collapse",
  },
  {
    name: "Accordion",
    path: "/components/accordion",
  },
  {
    name: "Mask",
    path: "/components/mask",
  },
  {
    name: "Loading",
    path: "/components/loading",
  },
  {
    name: "Avatar",
    path: "/components/avatar",
  },
  {
    name: "Carousel",
    path: "/components/carousel",
  },
  {
    name: "Chat bubble",
    path: "/components/chat",
  },
  {
    name: "Countdown",
    path: "/components/countdown",
  },
  {
    name: "Diff",
    path: "/components/diff",
  },
  {
    name: "Kbd",
    path: "/components/kbd",
  },
  {
    name: "Stats",
    path: "/components/stats",
  },
  {
    name: "Table",
    path: "/components/table",
  },
  {
    name: "Timeline",
    path: "/components/timeline",
  },
  {
    name: "Breadcrumbs",
    path: "/components/breadcrumbs",
  },
  {
    name: "Bottom Navigation",
    path: "/components/bottom-navigation",
  },
  {
    name: "Link",
    path: "/components/link",
  },
  {
    name: "Pagination",
    path: "/components/pagination",
  },
  {
    name: "Steps",
    path: "/components/steps",
  },
  {
    name: "Tabs",
    path: "/components/tabs",
  },
  {
    name: "Alert",
    path: "/components/alert",
  },
  {
    name: "Progress",
    path: "/components/progress",
  },
  {
    name: "Radial Progress",
    path: "/components/radial-progress",
  },
  {
    name: "Skeleton",
    path: "/components/skeleton",
  },
  {
    name: "Toast",
    path: "/components/toast",
  },
];

export function Sidebar({ className }: { className?: string }) {
  const location = useLocation();
  return (
    <div className={twMerge("relative bg-base-100 z-10", className)}>
      <div className="sticky top-0 max-h-dvh overflow-y-auto">
        <Menu>
          <Menu.Title>Components</Menu.Title>
          {components.map((item) => (
            <Menu.Item key={item.path} active={location.pathname === item.path}>
              <Link to={item.path}>{item.name}</Link>
            </Menu.Item>
          ))}
        </Menu>
      </div>
    </div>
  );
}
