import { render } from "@testing-library/react";
import { createRef } from "react";
import { Toggle } from "./Toggle";

describe("Toggle", () => {
  it("Should render Toggle", () => {
    const { getByTestId } = render(<Toggle data-testid="Toggle" />);
    expect(getByTestId("Toggle")).toBeInTheDocument();
  });

  it("Should forward the ref to the root element", () => {
    const ref = createRef<HTMLDivElement>();
    render(<Toggle ref={ref} />);
    expect(ref.current).toBeInTheDocument();
  });
});
