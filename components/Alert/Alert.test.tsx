import { render } from "@testing-library/react";
import { createRef } from "react";
import { Alert } from "./Alert";

describe("Alert", () => {
  it("Should render Alert", () => {
    const { getByRole } = render(<Alert>Test</Alert>);
    expect(getByRole("alert")).toBeInTheDocument();
  });
  it("Should forward the ref to the root element", () => {
    const ref = createRef<HTMLDivElement>();
    render(<Alert ref={ref} />);
    expect(ref.current).toBeInTheDocument();
  });
  it("renders with icon", () => {
    const { getByTestId } = render(
      <Alert icon={<div data-testid="foo" />}>Test</Alert>
    );
    expect(getByTestId("foo")).toBeInTheDocument();
  });

  it("renders with color", () => {
    const { getByRole } = render(<Alert color="success">Test</Alert>);
    expect(getByRole("alert")).toHaveClass("alert-success");
  });
});
