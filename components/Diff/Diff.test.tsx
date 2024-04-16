import { render } from "@testing-library/react";
import { createRef } from "react";
import { Diff } from "./Diff";

describe("Diff", () => {
  it("Should render Diff", () => {
    const { getByTestId } = render(<Diff data-testid="Diff" />);
    expect(getByTestId("Diff")).toBeInTheDocument();
  });

  it("Should forward the ref to the root element", () => {
    const ref = createRef<HTMLDivElement>();
    render(<Diff ref={ref} />);
    expect(ref.current).toBeInTheDocument();
  });
});
