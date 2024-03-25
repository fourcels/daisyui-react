import { render } from "@testing-library/react";
import { createRef } from "react";
import { Alert } from "./Alert";

describe("Alert", () => {
  it("renders a default state", () => {
    const { getByRole } = render(<Alert>Test</Alert>);
    expect(getByRole("alert")).toBeTruthy();
  });
  it("Should forward the ref to the root element", () => {
    const ref = createRef<HTMLDivElement>();
    render(<Alert ref={ref} />);
    expect(ref.current).toBeInTheDocument();
  });
  it("renders an icon", () => {
    const { getByTestId } = render(
      <Alert icon={<div data-testid="foo" />}>Test</Alert>
    );
    expect(getByTestId("foo")).toBeTruthy();
  });

  it("renders a status", () => {
    const { getByRole } = render(<Alert color="success">Test</Alert>);
    expect(getByRole("alert").classList).toContain("alert-success");
  });
});
