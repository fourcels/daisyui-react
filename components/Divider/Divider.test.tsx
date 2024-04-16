import { render } from "@testing-library/react";
import { createRef } from "react";
import { Divider } from "./Divider";

describe("Divider", () => {
  it("Should render Divider", () => {
    const { getByTestId } = render(<Divider data-testid="Divider" />);
    expect(getByTestId("Divider")).toBeInTheDocument();
  });

  it("Should forward the ref to the root element", () => {
    const ref = createRef<HTMLDivElement>();
    render(<Divider ref={ref} />);
    expect(ref.current).toBeInTheDocument();
  });

  it("renders with responsive", () => {
    const { getByTestId } = render(
      <Divider data-testid="Divider" responsive />
    );
    expect(getByTestId("Divider")).toHaveClass("lg:divider-horizontal");
  });
  it("renders with direction", () => {
    const { getByTestId } = render(
      <Divider data-testid="Divider" direction="horizontal" />
    );
    expect(getByTestId("Divider")).toHaveClass("divider-horizontal");
  });
  it("renders with color", () => {
    const { getByTestId } = render(
      <Divider data-testid="Divider" color="primary" />
    );
    expect(getByTestId("Divider")).toHaveClass("divider-primary");
  });
  it("renders with position", () => {
    const { getByTestId } = render(
      <Divider data-testid="Divider" position="start" />
    );
    expect(getByTestId("Divider")).toHaveClass("divider-start");
  });
});
