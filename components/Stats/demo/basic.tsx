import { Divider, Toggle, Stats, Avatar } from "daisyui-react";
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
        <Stats center={center} vertical={vertical} responsive={responsive}>
          <Stats.Stat>
            <Stats.Figure className="text-primary">
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
            </Stats.Figure>
            <Stats.Title>Total Likes</Stats.Title>
            <Stats.Value className="text-primary">25.6K</Stats.Value>
            <Stats.Desc>21% more than last month</Stats.Desc>
          </Stats.Stat>
          <Stats.Stat>
            <Stats.Figure className="text-secondary">
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
            </Stats.Figure>
            <Stats.Title>Page Views</Stats.Title>
            <Stats.Value className="text-secondary">2.6M</Stats.Value>
            <Stats.Desc>21% more than last month</Stats.Desc>
          </Stats.Stat>
          <Stats.Stat>
            <Stats.Figure className="text-secondary">
              <Avatar
                shape="circle"
                indicator="online"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </Stats.Figure>
            <Stats.Value>86%</Stats.Value>
            <Stats.Title>Tasks done</Stats.Title>
            <Stats.Desc className="text-secondary">
              31 tasks remaining
            </Stats.Desc>
          </Stats.Stat>
        </Stats>
      </div>
    </>
  );
}
