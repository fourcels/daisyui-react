import { render } from "@testing-library/react";
import { createRef } from "react";
import { MockupBrowser } from "./MockupBrowser";

describe("MockupBrowser", () => {
  it("Should render MockupBrowser", () => {
    const { getByTestId } = render(
      <MockupBrowser data-testid="MockupBrowser" />
    );
    expect(getByTestId("MockupBrowser")).toBeInTheDocument();
  });

  it("Should forward the ref to the root element", () => {
    const ref = createRef<HTMLDivElement>();
    render(<MockupBrowser ref={ref} />);
    expect(ref.current).toBeInTheDocument();
  });
  it("renders with toolbar", () => {
    const { getByTestId } = render(
      <MockupBrowser toolbar={<div data-testid="foo"></div>} />
    );
    expect(getByTestId("foo")).toBeInTheDocument();
  });
});
