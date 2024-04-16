import { render } from "@testing-library/react";
import { createRef } from "react";
import { Navbar } from "./Navbar";

describe("Navbar", () => {
  it("Should render Navbar", () => {
    const { getByTestId } = render(<Navbar data-testid="Navbar" />);
    expect(getByTestId("Navbar")).toBeInTheDocument();
  });

  it("Should forward the ref to the root element", () => {
    const ref = createRef<HTMLDivElement>();
    render(<Navbar ref={ref} />);
    expect(ref.current).toBeInTheDocument();
  });
  it("renders with shadow", () => {
    const { getByTestId } = render(<Navbar data-testid="Navbar" shadow />);
    expect(getByTestId("Navbar")).toHaveClass("shadow-md");
  });
  it("renders with rounded", () => {
    const { getByTestId } = render(<Navbar data-testid="Navbar" rounded />);
    expect(getByTestId("Navbar")).toHaveClass("rounded-box");
  });
});
