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

  it("renders with color", () => {
    const { getByTestId } = render(
      <Range data-testid="Range" color="primary" />
    );
    expect(getByTestId("Range")).toHaveClass("range-primary");
  });
  it("renders with label", () => {
    const { container } = render(<Range label />);
    expect(container.querySelector(".range-label")).toBeInTheDocument();
  });
  it("renders with label 2", () => {
    const { getByTestId } = render(
      <Range label={(value) => <div data-testid="foo">{value}</div>} />
    );
    expect(getByTestId("foo")).toBeInTheDocument();
  });
  it("renders with measure", () => {
    const { container } = render(<Range measure />);
    expect(container.querySelector(".range-measure")).toBeInTheDocument();
  });
  it("renders with wrapperClassName", () => {
    const { container } = render(<Range wrapperClassName="customClassName" />);
    expect(container.querySelector(".range-wrapper")).toHaveClass(
      "customClassName"
    );
  });
});
