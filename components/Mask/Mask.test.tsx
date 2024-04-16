import { render } from "@testing-library/react";
import { createRef } from "react";
import { Mask } from "./Mask";

describe("Mask", () => {
  it("Should render Mask", () => {
    const { getByTestId } = render(<Mask data-testid="Mask" />);
    expect(getByTestId("Mask")).toBeInTheDocument();
  });

  it("Should forward the ref to the root element", () => {
    const ref = createRef<HTMLDivElement>();
    render(<Mask ref={ref} />);
    expect(ref.current).toBeInTheDocument();
  });
  it("renders with mask", () => {
    const { getByTestId } = render(<Mask data-testid="Mask" mask="circle" />);
    expect(getByTestId("Mask")).toHaveClass("mask-circle");
  });
  it("renders with half", () => {
    const { getByTestId } = render(<Mask data-testid="Mask" half="half-1" />);
    expect(getByTestId("Mask")).toHaveClass("mask-half-1");
  });
});
