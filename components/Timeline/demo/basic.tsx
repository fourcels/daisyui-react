import { Divider, Toggle, Timeline } from "daisyui-react";
import React from "react";

export default function App() {
  const [middle, setMiddle] = React.useState(true);
  const [compact, setCompact] = React.useState(false);
  const [vertical, setVertical] = React.useState(false);
  const [responsive, setResponsive] = React.useState(false);
  return (
    <>
      <div className="flex gap-4">
        <Toggle
          label="Middle"
          checked={middle}
          onChange={(e) => setMiddle(e.target.checked)}
        />
        <Toggle
          label="Compact"
          checked={compact}
          onChange={(e) => setCompact(e.target.checked)}
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
        <Timeline
          vertical={vertical}
          responsive={responsive}
          middle={middle}
          compact={compact}
        >
          <Timeline.Item active>
            <Timeline.Start box>First Macintosh computer</Timeline.Start>
          </Timeline.Item>
          <Timeline.Item active>
            <Timeline.End box>iMac</Timeline.End>
          </Timeline.Item>
          <Timeline.Item active>
            <Timeline.Start box>iPod</Timeline.Start>
          </Timeline.Item>
          <Timeline.Item>
            <Timeline.End box>iPhone</Timeline.End>
          </Timeline.Item>
          <Timeline.Item>
            <Timeline.Start box>Apple Watch</Timeline.Start>
          </Timeline.Item>
        </Timeline>
      </div>
    </>
  );
}
