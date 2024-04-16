import { render } from "@testing-library/react";
import { createRef } from "react";
import { Stats } from "./Stats";

describe("Stats", () => {
  it("Should render Stats", () => {
    const { getByTestId } = render(<Stats data-testid="Stats" />);
    expect(getByTestId("Stats")).toBeInTheDocument();
  });

  it("Should forward the ref to the root element", () => {
    const ref = createRef<HTMLDivElement>();
    render(<Stats ref={ref} />);
    expect(ref.current).toBeInTheDocument();
  });
});
