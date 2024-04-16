import { render } from "@testing-library/react";
import { createRef } from "react";
import { Tooltip } from "./Tooltip";

describe("Tooltip", () => {
  it("Should render Tooltip", () => {
    const { getByTestId } = render(<Tooltip data-testid="Tooltip" />);
    expect(getByTestId("Tooltip")).toBeInTheDocument();
  });

  it("Should forward the ref to the root element", () => {
    const ref = createRef<HTMLDivElement>();
    render(<Tooltip ref={ref} />);
    expect(ref.current).toBeInTheDocument();
  });
});
