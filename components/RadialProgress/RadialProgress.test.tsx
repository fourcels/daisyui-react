import { render } from "@testing-library/react";
import { createRef } from "react";
import { RadialProgress } from "./RadialProgress";

describe("RadialProgress", () => {
  it("Should render RadialProgress", () => {
    const { getByTestId } = render(
      <RadialProgress data-testid="RadialProgress" />
    );
    expect(getByTestId("RadialProgress")).toBeInTheDocument();
  });

  it("Should forward the ref to the root element", () => {
    const ref = createRef<HTMLDivElement>();
    render(<RadialProgress ref={ref} />);
    expect(ref.current).toBeInTheDocument();
  });
  it("renders with color", () => {
    const { getByTestId } = render(
      <RadialProgress data-testid="RadialProgress" color="primary" />
    );
    expect(getByTestId("RadialProgress")).toHaveClass("text-primary");
  });
  it("renders with value", () => {
    const { getByTestId } = render(
      <RadialProgress data-testid="RadialProgress" value={10} />
    );
    expect(getByTestId("RadialProgress")).toHaveStyle({ "--value": "10" });
  });
  it("renders with size", () => {
    const { getByTestId } = render(
      <RadialProgress data-testid="RadialProgress" size={10} />
    );
    expect(getByTestId("RadialProgress")).toHaveStyle({ "--size": "10rem" });
  });
  it("renders with thickness", () => {
    const { getByTestId } = render(
      <RadialProgress data-testid="RadialProgress" thickness="2px" />
    );
    expect(getByTestId("RadialProgress")).toHaveStyle({ "--thickness": "2px" });
  });
});
