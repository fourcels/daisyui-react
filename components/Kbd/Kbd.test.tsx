import { render } from "@testing-library/react";
import { createRef } from "react";
import { Kbd } from "./Kbd";

describe("Kbd", () => {
  it("Should render Kbd", () => {
    const { getByTestId } = render(<Kbd data-testid="Kbd" />);
    expect(getByTestId("Kbd")).toBeInTheDocument();
  });

  it("Should forward the ref to the root element", () => {
    const ref = createRef<HTMLDivElement>();
    render(<Kbd ref={ref} />);
    expect(ref.current).toBeInTheDocument();
  });

  it("renders with size", () => {
    const { getByTestId } = render(<Kbd data-testid="Kbd" size="lg" />);
    expect(getByTestId("Kbd")).toHaveClass("kbd-lg");
  });
});
