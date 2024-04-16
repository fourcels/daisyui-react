import { render } from "@testing-library/react";
import { createRef } from "react";
import { MockupPhone } from "./MockupPhone";

describe("MockupPhone", () => {
  it("Should render MockupPhone", () => {
    const { getByTestId } = render(<MockupPhone data-testid="MockupPhone" />);
    expect(getByTestId("MockupPhone")).toBeInTheDocument();
  });

  it("Should forward the ref to the root element", () => {
    const ref = createRef<HTMLDivElement>();
    render(<MockupPhone ref={ref} />);
    expect(ref.current).toBeInTheDocument();
  });

  it("renders with color", () => {
    const { getByTestId } = render(
      <MockupPhone data-testid="MockupPhone" color="primary" />
    );
    expect(getByTestId("MockupPhone")).toHaveClass("border-primary");
  });
  it("renders with size", () => {
    const { getByTestId } = render(
      <MockupPhone data-testid="MockupPhone" size="phone-1" />
    );
    expect(getByTestId("MockupPhone").querySelector(".artboard")).toHaveClass(
      "phone-1"
    );
  });
});
