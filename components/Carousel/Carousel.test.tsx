import { render } from "@testing-library/react";
import { createRef } from "react";
import { Carousel } from "./Carousel";

describe("Carousel", () => {
  it("Should render Carousel", () => {
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
  it("renders with snap", () => {
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
  it("renders with indicator", () => {
    const { container } = render(
      <Carousel indicator>
        <Carousel.Item></Carousel.Item>
        <Carousel.Item></Carousel.Item>
      </Carousel>
    );
    expect(container.querySelector(".carousel-indicator")).toBeInTheDocument();
  });
  it("renders with wrapperClassName", () => {
    const { container } = render(
      <Carousel wrapperClassName="customClassName"></Carousel>
    );
    expect(container.querySelector(".carousel-wrapper")).toHaveClass(
      "customClassName"
    );
  });
  it("renders with contentClassName", () => {
    const { container } = render(
      <Carousel contentClassName="customClassName"></Carousel>
    );
    expect(container.querySelector(".carousel-content")).toHaveClass(
      "customClassName"
    );
  });
});
