import { render } from "@testing-library/react";
import { createRef } from "react";
import { Textarea } from "./Textarea";

describe("Textarea", () => {
  it("Should render Textarea", () => {
    const { getByTestId } = render(<Textarea data-testid="Textarea" />);
    expect(getByTestId("Textarea")).toBeInTheDocument();
  });

  it("Should forward the ref to the root element", () => {
    const ref = createRef<HTMLTextAreaElement>();
    render(<Textarea ref={ref} />);
    expect(ref.current).toBeInTheDocument();
  });
  it("renders with color", () => {
    const { getByTestId } = render(
      <Textarea data-testid="Textarea" color="primary" />
    );
    expect(getByTestId("Textarea")).toHaveClass("textarea-primary");
  });
  it("renders with bordered", () => {
    const { getByTestId } = render(
      <Textarea data-testid="Textarea" bordered />
    );
    expect(getByTestId("Textarea")).toHaveClass("textarea-bordered");
  });
  it("renders with disabled", () => {
    const { getByTestId } = render(
      <Textarea data-testid="Textarea" disabled />
    );
    expect(getByTestId("Textarea")).toBeDisabled();
  });
  it("renders with size", () => {
    const { getByTestId } = render(
      <Textarea data-testid="Textarea" size="lg" />
    );
    expect(getByTestId("Textarea")).toHaveClass("textarea-lg");
  });
});
