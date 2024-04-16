import { render } from "@testing-library/react";
import { createRef } from "react";
import { Dropdown } from "./Dropdown";

describe("Dropdown", () => {
  it("Should render Dropdown", () => {
    const { getByTestId } = render(<Dropdown data-testid="Dropdown" />);
    expect(getByTestId("Dropdown")).toBeInTheDocument();
  });

  it("Should forward the ref to the root element", () => {
    const ref = createRef<HTMLDivElement>();
    render(<Dropdown ref={ref} />);
    expect(ref.current).toBeInTheDocument();
  });

  it("renders with position", () => {
    const { getByTestId } = render(
      <Dropdown position="top" data-testid="Dropdown" />
    );
    expect(getByTestId("Dropdown")).toHaveClass("dropdown-top");
  });
  it("renders with end", () => {
    const { getByTestId } = render(<Dropdown end data-testid="Dropdown" />);
    expect(getByTestId("Dropdown")).toHaveClass("dropdown-end");
  });
  it("renders with hover", () => {
    const { getByTestId } = render(<Dropdown hover data-testid="Dropdown" />);
    expect(getByTestId("Dropdown")).toHaveClass("dropdown-hover");
  });
  it("renders with open", () => {
    const { getByTestId } = render(<Dropdown open data-testid="Dropdown" />);
    expect(getByTestId("Dropdown")).toHaveClass("dropdown-open");
  });
});
