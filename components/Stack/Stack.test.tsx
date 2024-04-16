import { render } from "@testing-library/react";
import { createRef } from "react";
import { Stack } from "./Stack";

describe("Stack", () => {
  it("Should render Stack", () => {
    const { getByTestId } = render(<Stack data-testid="Stack" />);
    expect(getByTestId("Stack")).toBeInTheDocument();
  });

  it("Should forward the ref to the root element", () => {
    const ref = createRef<HTMLDivElement>();
    render(<Stack ref={ref} />);
    expect(ref.current).toBeInTheDocument();
  });
});
