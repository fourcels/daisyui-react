import { render } from "@testing-library/react";
import { createRef } from "react";
import { Link } from "./Link";

describe("Link", () => {
  it("Should render Link", () => {
    const { getByTestId } = render(<Link data-testid="Link" />);
    expect(getByTestId("Link")).toBeInTheDocument();
  });

  it("Should forward the ref to the root element", () => {
    const ref = createRef<HTMLAnchorElement>();
    render(<Link ref={ref} />);
    expect(ref.current).toBeInTheDocument();
  });
  it("renders with color", () => {
    const { getByTestId } = render(<Link data-testid="Link" color="primary" />);
    expect(getByTestId("Link")).toHaveClass("link-primary");
  });
  it("renders with hover", () => {
    const { getByTestId } = render(<Link data-testid="Link" hover />);
    expect(getByTestId("Link")).toHaveClass("link-hover");
  });
});
