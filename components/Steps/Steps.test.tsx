import { render } from "@testing-library/react";
import { createRef } from "react";
import { Steps } from "./Steps";

describe("Steps", () => {
  it("Should render Steps", () => {
    const { getByTestId } = render(<Steps data-testid="Steps" />);
    expect(getByTestId("Steps")).toBeInTheDocument();
  });

  it("Should forward the ref to the root element", () => {
    const ref = createRef<HTMLDivElement>();
    render(<Steps ref={ref} />);
    expect(ref.current).toBeInTheDocument();
  });
});
