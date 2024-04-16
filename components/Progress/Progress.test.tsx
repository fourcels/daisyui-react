import { render } from "@testing-library/react";
import { createRef } from "react";
import { Progress } from "./Progress";

describe("Progress", () => {
  it("Should render Progress", () => {
    const { getByTestId } = render(<Progress data-testid="Progress" />);
    expect(getByTestId("Progress")).toBeInTheDocument();
  });

  it("Should forward the ref to the root element", () => {
    const ref = createRef<HTMLProgressElement>();
    render(<Progress ref={ref} />);
    expect(ref.current).toBeInTheDocument();
  });
  it("renders with color", () => {
    const { getByTestId } = render(
      <Progress data-testid="Progress" color="primary" />
    );
    expect(getByTestId("Progress")).toHaveClass("progress-primary");
  });
});
