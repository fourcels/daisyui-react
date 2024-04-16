import { render } from "@testing-library/react";
import { createRef } from "react";
import { Radio } from "./Radio";

describe("Radio", () => {
  it("Should render Radio", () => {
    const { getByTestId } = render(<Radio data-testid="Radio" />);
    expect(getByTestId("Radio")).toBeInTheDocument();
  });

  it("Should forward the ref to the root element", () => {
    const ref = createRef<HTMLInputElement>();
    render(<Radio ref={ref} />);
    expect(ref.current).toBeInTheDocument();
  });

  it("renders with size", () => {
    const { getByTestId } = render(<Radio data-testid="Radio" size="lg" />);
    expect(getByTestId("Radio")).toHaveClass("radio-lg");
  });
  it("renders with color", () => {
    const { getByTestId } = render(
      <Radio data-testid="Radio" color="primary" />
    );
    expect(getByTestId("Radio")).toHaveClass("radio-primary");
  });
  it("renders with label", () => {
    const { getByTestId } = render(
      <Radio label={<div data-testid="foo"></div>} />
    );
    expect(getByTestId("foo")).toBeInTheDocument();
  });
  it("renders with wrapperClassName", () => {
    const { container } = render(<Radio wrapperClassName="customClassName" />);
    expect(container.firstElementChild).toHaveClass("customClassName");
  });
  it("renders with reverse", () => {
    const { container } = render(<Radio reverse />);
    expect(container.firstElementChild).toHaveClass("flex-row-reverse");
  });
});
