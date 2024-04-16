import { render } from "@testing-library/react";
import { createRef } from "react";
import { Footer } from "./Footer";

describe("Footer", () => {
  it("Should render Footer", () => {
    const { getByTestId } = render(<Footer data-testid="Footer" />);
    expect(getByTestId("Footer")).toBeInTheDocument();
  });

  it("Should forward the ref to the root element", () => {
    const ref = createRef<HTMLDivElement>();
    render(<Footer ref={ref} />);
    expect(ref.current).toBeInTheDocument();
  });

  it("renders with center", () => {
    const { getByTestId } = render(<Footer center data-testid="Footer" />);
    expect(getByTestId("Footer")).toHaveClass("footer-center");
  });
});
