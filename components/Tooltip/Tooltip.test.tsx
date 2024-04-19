import { render } from "@testing-library/react";
import { createRef } from "react";
import { Tooltip } from "./Tooltip";

describe("Tooltip", () => {
  it("Should render Tooltip", () => {
    const { getByTestId } = render(<Tooltip data-testid="Tooltip" />);
    expect(getByTestId("Tooltip")).toBeInTheDocument();
  });

  it("Should forward the ref to the root element", () => {
    const ref = createRef<HTMLDivElement>();
    render(<Tooltip ref={ref} />);
    expect(ref.current).toBeInTheDocument();
  });
  it("renders with color", () => {
    const { getByTestId } = render(
      <Tooltip data-testid="Tooltip" color="primary" />
    );
    expect(getByTestId("Tooltip")).toHaveClass("tooltip-primary");
  });
  it("renders with position", () => {
    const { getByTestId } = render(
      <Tooltip data-testid="Tooltip" position="top" />
    );
    expect(getByTestId("Tooltip")).toHaveClass("tooltip-top");
  });
  it("renders with open", () => {
    const { getByTestId } = render(<Tooltip data-testid="Tooltip" open />);
    expect(getByTestId("Tooltip")).toHaveClass("tooltip-open");
  });
  it("renders with title", () => {
    const { getByTestId } = render(
      <Tooltip data-testid="Tooltip" title="foo" />
    );
    expect(getByTestId("Tooltip")).toHaveProperty("dataset.tip", "foo");
  });
});
