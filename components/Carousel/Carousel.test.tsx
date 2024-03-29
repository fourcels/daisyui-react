import { render } from "@testing-library/react";
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
});
