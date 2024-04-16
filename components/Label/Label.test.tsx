import { render } from "@testing-library/react";
import { createRef } from "react";
import { Label } from "./Label";

describe("Label", () => {
  it("Should render Label", () => {
    const { getByTestId } = render(<Label data-testid="Label" />);
    expect(getByTestId("Label")).toBeInTheDocument();
  });

  it("Should forward the ref to the root element", () => {
    const ref = createRef<HTMLLabelElement>();
    render(<Label ref={ref} />);
    expect(ref.current).toBeInTheDocument();
  });
  it("renders with reverse", () => {
    const { getByTestId } = render(<Label data-testid="Label" reverse />);
    expect(getByTestId("Label")).toHaveClass("flex-row-reverse");
  });
  it("text renders with alt", () => {
    const { getByTestId } = render(
      <Label>
        <Label.Text alt data-testid="Label.Text"></Label.Text>
      </Label>
    );
    expect(getByTestId("Label.Text")).toHaveClass("label-text-alt");
  });
});
