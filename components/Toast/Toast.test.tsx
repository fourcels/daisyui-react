import { render } from "@testing-library/react";
import { createRef } from "react";
import { Toast } from "./Toast";

describe("Toast", () => {
  it("Should render Toast", () => {
    const { getByTestId } = render(<Toast data-testid="Toast" />);
    expect(getByTestId("Toast")).toBeInTheDocument();
  });

  it("Should forward the ref to the root element", () => {
    const ref = createRef<HTMLDivElement>();
    render(<Toast ref={ref} />);
    expect(ref.current).toBeInTheDocument();
  });
});
