import { render } from "@testing-library/react";
import { createRef } from "react";
import { Select } from "./Select";

describe("Select", () => {
  it("Should render Select", () => {
    const { getByTestId } = render(<Select data-testid="Select" />);
    expect(getByTestId("Select")).toBeInTheDocument();
  });

  it("Should forward the ref to the root element", () => {
    const ref = createRef<HTMLDivElement>();
    render(<Select ref={ref} />);
    expect(ref.current).toBeInTheDocument();
  });
});
