import { Divider, Toggle, Button } from "daisyui-react";
import React from "react";
import { Card } from "..";
import { twMerge } from "tailwind-merge";

export default function App() {
  const [bordered, setBordered] = React.useState(true);
  const [shadow, setShadow] = React.useState(true);
  const [imageFull, setImageFull] = React.useState(false);
  const [compact, setCompact] = React.useState(false);
  const [glass, setGlass] = React.useState(false);
  const [side, setSide] = React.useState(false);

  return (
    <>
      <div className="flex flex-wrap gap-8">
        <Toggle
          label="Bordered"
          defaultChecked
          onChange={(checked) => setBordered(checked)}
        />
        <Toggle
          label="Shadow"
          defaultChecked
          onChange={(checked) => setShadow(checked)}
        />
        <Toggle
          label="Image Full"
          onChange={(checked) => setImageFull(checked)}
        />
        <Toggle label="Compact" onChange={(checked) => setCompact(checked)} />
        <Toggle label="Glass" onChange={(checked) => setGlass(checked)} />
        <Toggle label="Side" onChange={(checked) => setSide(checked)} />
      </div>

      <Divider>Preview</Divider>

      <div className="flex justify-center">
        <Card
          bordered={bordered}
          compact={compact}
          shadow={shadow}
          imageFull={imageFull}
          glass={glass}
          side={side}
          className={twMerge("bg-base-200 w-96", side && "w-auto")}
        >
          <Card.Image
            src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
          />
          <Card.Body>
            <Card.Title>Shoes!</Card.Title>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <Card.Actions>
              <Button color="primary">Buy Now</Button>
            </Card.Actions>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
