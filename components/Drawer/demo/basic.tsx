import {
  Select,
  Form,
  Divider,
  Toggle,
  DropdownProps,
  Menu,
  Button,
} from "daisyui-react";
import React from "react";
import { Drawer } from "..";

export default function App() {
  const [end, setEnd] = React.useState(false);
  const [overlay, setOverlay] = React.useState(true);
  const [responsive, setResponsive] = React.useState(false);

  return (
    <>
      <div className="flex flex-wrap gap-8">
        <Toggle label="End" onChange={(checked) => setEnd(checked)} />
        <Toggle
          label="Overlay"
          defaultChecked
          onChange={(checked) => setOverlay(checked)}
        />
        <Toggle
          label="Responsive"
          onChange={(checked) => setResponsive(checked)}
        />
      </div>

      <Divider>Preview</Divider>

      <Drawer end={end} overlay={overlay} responsive={responsive}>
        <Drawer.Content className="flex justify-center">
          <Drawer.Toggle>
            <Button color="primary">Open drawer</Button>
          </Drawer.Toggle>
        </Drawer.Content>
        <Drawer.Side>
          <Menu className="p-4 w-60 md:w-80">
            <Menu.Item>
              <a>Sidebar Item 1</a>
            </Menu.Item>
            <Menu.Item>
              <a>Sidebar Item 2</a>
            </Menu.Item>
          </Menu>
          <div className="flex justify-center">
            <Drawer.Toggle>
              <Button wide color="neutral">
                Close drawer
              </Button>
            </Drawer.Toggle>
          </div>
        </Drawer.Side>
      </Drawer>
    </>
  );
}
