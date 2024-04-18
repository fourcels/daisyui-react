import { render } from "@testing-library/react";
import { createRef } from "react";
import { Swap } from "./Swap";

describe("Swap", () => {
  it("Should render Swap", () => {
    const { getByTestId } = render(<Swap data-testid="Swap" />);
    expect(getByTestId("Swap")).toBeInTheDocument();
  });

  it("Should forward the ref to the root element", () => {
    const ref = createRef<HTMLLabelElement>();
    render(<Swap ref={ref} />);
    expect(ref.current).toBeInTheDocument();
  });
  it("renders with active", () => {
    const { container } = render(<Swap active />);
    expect(container.firstElementChild).toHaveClass("swap-active");
  });
  it("renders with effect", () => {
    const { container } = render(<Swap effect="flip" />);
    expect(container.firstElementChild).toHaveClass("swap-flip");
  });
});
