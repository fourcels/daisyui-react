import { render } from "@testing-library/react";
import { createRef } from "react";
import { MockupWindow } from "./MockupWindow";

describe("MockupWindow", () => {
  it("Should render MockupWindow", () => {
    const { getByTestId } = render(<MockupWindow data-testid="MockupWindow" />);
    expect(getByTestId("MockupWindow")).toBeInTheDocument();
  });

  it("Should forward the ref to the root element", () => {
    const ref = createRef<HTMLDivElement>();
    render(<MockupWindow ref={ref} />);
    expect(ref.current).toBeInTheDocument();
  });
  it("renders with contentClassName", () => {
    const { getByTestId } = render(
      <MockupWindow
        data-testid="MockupWindow"
        contentClassName="customClassName"
      />
    );
    expect(getByTestId("MockupWindow").firstElementChild).toHaveClass(
      "customClassName"
    );
  });
});
