import { render } from "@testing-library/react";
import { createRef } from "react";
import { Timeline } from "./Timeline";

describe("Timeline", () => {
  it("Should render Timeline", () => {
    const { getByTestId } = render(<Timeline data-testid="Timeline" />);
    expect(getByTestId("Timeline")).toBeInTheDocument();
  });

  it("Should forward the ref to the root element", () => {
    const ref = createRef<HTMLDivElement>();
    render(<Timeline ref={ref} />);
    expect(ref.current).toBeInTheDocument();
  });
});
