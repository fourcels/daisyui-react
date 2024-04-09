import { render, screen } from "@testing-library/react";
import { createRef } from "react";
import { Checkbox } from "./Checkbox";

describe("Checkbox", () => {
  it("Should render Checkbox", () => {
    const { getByTestId } = render(<Checkbox data-testid="Checkbox" />);
    expect(getByTestId("Checkbox")).toBeInTheDocument();
  });
  it("Should forward the ref to the root element", () => {
    const ref = createRef<HTMLInputElement>();
    render(<Checkbox ref={ref} />);
    expect(ref.current).toBeInTheDocument();
  });
  it("renders with size", () => {
    const { getByTestId } = render(
      <Checkbox data-testid="Checkbox" size="lg" />
    );
    expect(getByTestId("Checkbox")).toHaveClass("checkbox-lg");
  });
});
