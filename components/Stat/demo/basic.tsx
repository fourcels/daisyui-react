import {
  Select,
  Form,
  SelectProps,
  Divider,
  Toggle,
  Stat,
  Avatar,
} from "daisyui-react";
import React from "react";

export default function App() {
  const [center, setCenter] = React.useState(false);
  const [vertical, setVertical] = React.useState(false);
  const [responsive, setResponsive] = React.useState(false);

  return (
    <>
      <div className="flex flex-wrap gap-8">
        <Toggle
          label="Center"
          checked={center}
          onChange={(e) => setCenter(e.target.checked)}
        />
        <Toggle
          label="Vertical"
          checked={vertical}
          onChange={(e) => setVertical(e.target.checked)}
        />
        <Toggle
          label="Responsive"
          checked={responsive}
          onChange={(e) => setResponsive(e.target.checked)}
        />
      </div>

      <Divider>Preview</Divider>

      <div className="flex justify-center">
        <Stat.Group center={center} vertical={vertical} responsive={responsive}>
          <Stat>
            <Stat.Figure className="text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                ></path>
              </svg>
            </Stat.Figure>
            <Stat.Title>Total Likes</Stat.Title>
            <Stat.Value className="text-primary">25.6K</Stat.Value>
            <Stat.Desc>21% more than last month</Stat.Desc>
          </Stat>
          <Stat>
            <Stat.Figure className="text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </Stat.Figure>
            <Stat.Title>Page Views</Stat.Title>
            <Stat.Value className="text-secondary">2.6M</Stat.Value>
            <Stat.Desc>21% more than last month</Stat.Desc>
          </Stat>
          <Stat>
            <Stat.Figure className="text-secondary">
              <Avatar
                shape="circle"
                indicator="online"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </Stat.Figure>
            <Stat.Value>86%</Stat.Value>
            <Stat.Title>Tasks done</Stat.Title>
            <Stat.Desc className="text-secondary">31 tasks remaining</Stat.Desc>
          </Stat>
        </Stat.Group>
      </div>
    </>
  );
}
