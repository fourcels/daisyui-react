import { render } from "@testing-library/react";
import { createRef } from "react";
import { Toggle } from "./Toggle";

describe("Toggle", () => {
  it("Should render Toggle", () => {
    const { getByTestId } = render(<Toggle data-testid="Toggle" />);
    expect(getByTestId("Toggle")).toBeInTheDocument();
  });

  it("Should forward the ref to the root element", () => {
    const ref = createRef<HTMLInputElement>();
    render(<Toggle ref={ref} />);
    expect(ref.current).toBeInTheDocument();
  });

  it("renders with checked", () => {
    const { getByTestId } = render(<Toggle data-testid="Toggle" checked />);
    expect(getByTestId("Toggle")).toBeChecked();
  });
  it("renders with color", () => {
    const { getByTestId } = render(
      <Toggle data-testid="Toggle" color="primary" />
    );
    expect(getByTestId("Toggle")).toHaveClass("toggle-primary");
  });
  it("renders with disabled", () => {
    const { getByTestId } = render(<Toggle data-testid="Toggle" disabled />);
    expect(getByTestId("Toggle")).toBeDisabled();
  });
  it("renders with indeterminate", () => {
    const { getByTestId } = render(
      <Toggle data-testid="Toggle" indeterminate />
    );
    expect(getByTestId("Toggle")).toHaveProperty("indeterminate", true);
  });
  it("renders with label", () => {
    const { getByTestId } = render(
      <Toggle label={<div data-testid="foo"></div>} />
    );
    expect(getByTestId("foo")).toBeInTheDocument();
  });
  it("renders with labelAlt", () => {
    const { getByTestId } = render(
      <Toggle labelAlt={<div data-testid="foo"></div>} />
    );
    expect(getByTestId("foo")).toBeInTheDocument();
  });
  it("renders with reverse", () => {
    const { container } = render(<Toggle reverse />);
    expect(container.firstElementChild).toHaveClass("flex-row-reverse");
  });
  it("renders with size", () => {
    const { getByTestId } = render(<Toggle data-testid="Toggle" size="lg" />);
    expect(getByTestId("Toggle")).toHaveClass("toggle-lg");
  });
  it("renders with reverse", () => {
    const { container } = render(<Toggle wrapperClassName="customClassName" />);
    expect(container.firstElementChild).toHaveClass("customClassName");
  });
});
