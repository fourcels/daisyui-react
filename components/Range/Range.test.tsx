import { render } from "@testing-library/react";
import { createRef } from "react";
import { Range } from "./Range";

describe("Range", () => {
  it("Should render Range", () => {
    const { getByTestId } = render(<Range data-testid="Range" />);
    expect(getByTestId("Range")).toBeInTheDocument();
  });

  it("Should forward the ref to the root element", () => {
    const ref = createRef<HTMLInputElement>();
    render(<Range ref={ref} />);
    expect(ref.current).toBeInTheDocument();
  });
});
