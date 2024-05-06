import {
  Divider,
  Form,
  Select,
  TableProps,
  Table,
  Toggle,
  Avatar,
  Button,
  Badge,
  Checkbox,
} from "daisyui-react";
import React from "react";

export default function App() {
  const [size, setSize] = React.useState<TableProps["size"]>();
  const [zebra, setZebra] = React.useState(false);
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  return (
    <div>
      <div className="flex flex-wrap gap-8">
        <Form.Control label="Size">
          <Select
            onChange={(value) => setSize(value as any)}
            items={["xs", "sm", "md", "lg"]}
          />
        </Form.Control>
        <Toggle
          label="Zebra"
          checked={zebra}
          onChange={(checked) => setZebra(checked)}
        />
        <Toggle
          label="Hover"
          checked={hover}
          onChange={(checked) => setHover(checked)}
        />
        <Toggle
          label="Active"
          checked={active}
          onChange={(checked) => setActive(checked)}
        />
      </div>
      <Divider>Preview</Divider>
      <div className="w-full  overflow-x-auto">
        <Table size={size} zebra={zebra} className="min-w-[700px]">
          <Table.Head>
            <Table.Row>
              <th>
                <Checkbox />
              </th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </Table.Row>
          </Table.Head>
          <Table.Body hover={hover}>
            {/* row 1 */}
            <Table.Row active={active}>
              <th>
                <Checkbox />
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <Avatar
                    size="sm"
                    mask="squircle"
                    src="https://daisyui.com//tailwind-css-component-profile-2@56w.png"
                  />
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                    <div className="text-sm opacity-50">United States</div>
                  </div>
                </div>
              </td>
              <td>
                Zemlak, Daniel and Leannon
                <br />
                <Badge color="ghost" size="sm">
                  Desktop Support Technician
                </Badge>
              </td>
              <td>Purple</td>
              <th>
                <Button color="ghost" size="xs">
                  details
                </Button>
              </th>
            </Table.Row>
            {/* row 2 */}
            <Table.Row>
              <th>
                <Checkbox />
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <Avatar
                    size="sm"
                    mask="squircle"
                    src="https://daisyui.com//tailwind-css-component-profile-3@56w.png"
                  />
                  <div>
                    <div className="font-bold">Brice Swyre</div>
                    <div className="text-sm opacity-50">China</div>
                  </div>
                </div>
              </td>
              <td>
                Carroll Group
                <br />
                <Badge color="ghost" size="sm">
                  Tax Accountant
                </Badge>
              </td>
              <td>Red</td>
              <th>
                <Button color="ghost" size="xs">
                  details
                </Button>
              </th>
            </Table.Row>
            {/* row 3 */}
            <Table.Row>
              <th>
                <Checkbox />
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <Avatar
                    size="sm"
                    mask="squircle"
                    src="https://daisyui.com//tailwind-css-component-profile-4@56w.png"
                  />
                  <div>
                    <div className="font-bold">Marjy Ferencz</div>
                    <div className="text-sm opacity-50">Russia</div>
                  </div>
                </div>
              </td>
              <td>
                Rowe-Schoen
                <br />
                <Badge>Office Assistant I</Badge>
              </td>
              <td>Crimson</td>
              <th>
                <Button color="ghost" size="xs">
                  details
                </Button>
              </th>
            </Table.Row>
            {/* row 4 */}
            <Table.Row>
              <th>
                <Checkbox />
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <Avatar
                    size="sm"
                    mask="squircle"
                    src="https://daisyui.com//tailwind-css-component-profile-5@56w.png"
                  />
                  <div>
                    <div className="font-bold">Yancy Tear</div>
                    <div className="text-sm opacity-50">Brazil</div>
                  </div>
                </div>
              </td>
              <td>
                Wyman-Ledner
                <br />
                <Badge color="ghost" size="sm">
                  Community Outreach Specialist
                </Badge>
              </td>
              <td>Indigo</td>
              <th>
                <Button color="ghost" size="xs">
                  details
                </Button>
              </th>
            </Table.Row>
          </Table.Body>
          <Table.Foot>
            <Table.Row>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </Table.Row>
          </Table.Foot>
        </Table>
      </div>
    </div>
  );
}
