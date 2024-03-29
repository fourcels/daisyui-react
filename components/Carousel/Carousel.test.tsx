import { render, screen } from "@testing-library/react";
import { createRef } from "react";
import { Carousel } from "./Carousel";

describe("Carousel", () => {
  it("renders a default state", () => {
    const { getByTestId } = render(
      <Carousel data-testid="Carousel"></Carousel>
    );
    expect(getByTestId("Carousel")).toBeInTheDocument();
  });
  it("Should forward the ref to the root element", () => {
    const ref = createRef<HTMLDivElement>();
    render(<Carousel ref={ref} />);
    expect(ref.current).toBeInTheDocument();
  });
  it("renders with a snap", () => {
    const { getByTestId } = render(
      <Carousel snap="start" data-testid="Carousel" />
    );
    expect(getByTestId("Carousel")).toHaveClass("carousel-start");
  });
  it("renders with vertical", () => {
    const { getByTestId } = render(
      <Carousel vertical data-testid="Carousel" />
    );
    expect(getByTestId("Carousel")).toHaveClass("carousel-vertical");
  });
  it("renders with vertical", () => {
    const { getByTestId } = render(
      <Carousel vertical data-testid="Carousel" />
    );
    expect(getByTestId("Carousel")).toHaveClass("carousel-vertical");
  });
  it("renders with width", () => {
    const { getByTestId } = render(
      <Carousel width="full">
        <Carousel.Item data-testid="Carousel.Item"></Carousel.Item>
      </Carousel>
    );
    expect(getByTestId("Carousel.Item")).toHaveClass("w-full");
  });
  it("renders with actions", () => {
    const { container } = render(
      <Carousel actions>
        <Carousel.Item></Carousel.Item>
        <Carousel.Item></Carousel.Item>
      </Carousel>
    );
    expect(container.querySelector(".carousel-prev")).toBeInTheDocument();
    expect(container.querySelector(".carousel-next")).toBeInTheDocument();
  });
});
