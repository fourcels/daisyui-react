import {
  Select,
  Form,
  Divider,
  CarouselProps,
  Carousel,
  Toggle,
} from "daisyui-react";
import React from "react";
import { twMerge } from "tailwind-merge";

export default function App() {
  const [snap, setSnap] = React.useState<CarouselProps["snap"]>();
  const [vertical, setVertical] = React.useState(false);
  return (
    <>
      <div className="flex flex-wrap gap-8">
        <Form.Control label="Snap">
          <Select
            onChange={(value) => setSnap(value as any)}
            items={["start", "center", "end"]}
          />
        </Form.Control>
        <Toggle
          label="Vertical"
          checked={vertical}
          onChange={(checked) => setVertical(checked)}
        />
      </div>

      <Divider>Preview</Divider>

      <div className="flex justify-center">
        <Carousel
          snap={snap}
          vertical={vertical}
          className={twMerge(vertical && "h-96")}
        >
          <Carousel.Item>
            <img
              src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
              alt="Burger"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
              alt="Burger"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
              alt="Burger"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"
              alt="Burger"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg"
              alt="Burger"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg"
              alt="Burger"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}
