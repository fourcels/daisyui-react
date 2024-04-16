import { render } from "@testing-library/react";
import { createRef } from "react";
import { MockupCode } from "./MockupCode";

describe("MockupCode", () => {
  it("Should render MockupCode", () => {
    const { getByTestId } = render(<MockupCode data-testid="MockupCode" />);
    expect(getByTestId("MockupCode")).toBeInTheDocument();
  });

  it("Should forward the ref to the root element", () => {
    const ref = createRef<HTMLDivElement>();
    render(<MockupCode ref={ref} />);
    expect(ref.current).toBeInTheDocument();
  });
  it("line renders with prefix", () => {
    const { getByTestId } = render(
      <MockupCode>
        <MockupCode.Line
          data-testid="MockupCode.Line"
          prefix="$"
        ></MockupCode.Line>
      </MockupCode>
    );
    expect(getByTestId("MockupCode.Line")).toHaveProperty(
      "dataset.prefix",
      "$"
    );
  });
});
