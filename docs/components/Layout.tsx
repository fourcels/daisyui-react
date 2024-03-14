import { ScrollRestoration } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { Outlet } from "react-router";
import { Drawer } from "daisyui-react";
import { Toolbar } from "./Toolbar";

export function Layout() {
  return (
    <Drawer responsive>
      <ScrollRestoration />
      <Drawer.Content>
        <Toolbar />
        <Outlet />
      </Drawer.Content>
      <Drawer.Side className="w-64 overflow-y-auto overscroll-contain">
        <Sidebar />
      </Drawer.Side>
    </Drawer>
  );
}
