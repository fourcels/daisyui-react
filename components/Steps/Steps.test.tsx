import { render } from "@testing-library/react";
import { createRef } from "react";
import { Steps } from "./Steps";

describe("Steps", () => {
  it("Should render Steps", () => {
    const { getByTestId } = render(<Steps data-testid="Steps" />);
    expect(getByTestId("Steps")).toBeInTheDocument();
  });

  it("Should forward the ref to the root element", () => {
    const ref = createRef<HTMLUListElement>();
    render(<Steps ref={ref} />);
    expect(ref.current).toBeInTheDocument();
  });
  it("renders with vertical", () => {
    const { getByTestId } = render(
      <Steps data-testid="Steps" vertical></Steps>
    );
    expect(getByTestId("Steps")).toHaveClass("steps-vertical");
  });
  it("renders with responsive", () => {
    const { getByTestId } = render(
      <Steps data-testid="Steps" responsive></Steps>
    );
    expect(getByTestId("Steps")).toHaveClass(
      "steps-vertical lg:steps-horizontal"
    );
  });
  it("step renders with color", () => {
    const { getByTestId } = render(
      <Steps>
        <Steps.Step data-testid="Steps.Step" color="primary"></Steps.Step>
      </Steps>
    );
    expect(getByTestId("Steps.Step")).toHaveClass("step-primary");
  });
});
