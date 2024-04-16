import { render } from "@testing-library/react";
import { createRef } from "react";
import { Swap } from "./Swap";

describe("Swap", () => {
  it("Should render Swap", () => {
    const { getByTestId } = render(<Swap data-testid="Swap" />);
    expect(getByTestId("Swap")).toBeInTheDocument();
  });

  it("Should forward the ref to the root element", () => {
    const ref = createRef<HTMLDivElement>();
    render(<Swap ref={ref} />);
    expect(ref.current).toBeInTheDocument();
  });
});
