import { render } from "@testing-library/react";
import { createRef } from "react";
import { Input } from "./Input";

describe("Input", () => {
  it("Should render Input", () => {
    const { getByTestId } = render(<Input data-testid="Input" />);
    expect(getByTestId("Input")).toBeInTheDocument();
  });

  it("Should forward the ref to the root element", () => {
    const ref = createRef<HTMLInputElement>();
    render(<Input ref={ref} />);
    expect(ref.current).toBeInTheDocument();
  });
  it("renders with size", () => {
    const { container } = render(<Input size="lg" />);
    expect(container.querySelector(".input-label")).toHaveClass("input-lg");
  });
  it("renders with color", () => {
    const { container } = render(<Input color="primary" />);
    expect(container.querySelector(".input-label")).toHaveClass(
      "input-primary"
    );
  });
  it("renders with bordered", () => {
    const { container } = render(<Input bordered />);
    expect(container.querySelector(".input-label")).toHaveClass(
      "input-bordered"
    );
  });
  it("renders with disabled", () => {
    const { container } = render(<Input disabled />);
    expect(container.querySelector(".input-label")).toHaveClass(
      "input-disabled"
    );
  });
  it("renders with contentClassName", () => {
    const { container } = render(<Input contentClassName="customClassName" />);
    expect(container.querySelector(".input-content")).toHaveClass(
      "customClassName"
    );
  });
  it("renders with inputClassName", () => {
    const { container } = render(<Input inputClassName="customClassName" />);
    expect(container.querySelector("input")).toHaveClass("customClassName");
  });
  it("renders with start", () => {
    const { getByTestId } = render(
      <Input start={<div data-testid="foo"></div>} />
    );
    expect(getByTestId("foo")).toBeInTheDocument();
  });
  it("renders with end", () => {
    const { getByTestId } = render(
      <Input end={<div data-testid="foo"></div>} />
    );
    expect(getByTestId("foo")).toBeInTheDocument();
  });
  it("renders with clearable", () => {
    const { container } = render(<Input value="value" />);
    expect(container.querySelector(".input-clearable")).toBeInTheDocument();
  });
});
