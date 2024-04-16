import { render } from "@testing-library/react";
import { createRef } from "react";
import { Join } from "./Join";

describe("Join", () => {
  it("Should render Join", () => {
    const { getByTestId } = render(<Join data-testid="Join" />);
    expect(getByTestId("Join")).toBeInTheDocument();
  });

  it("Should forward the ref to the root element", () => {
    const ref = createRef<HTMLDivElement>();
    render(<Join ref={ref} />);
    expect(ref.current).toBeInTheDocument();
  });
  it("renders with direction", () => {
    const { getByTestId } = render(
      <Join data-testid="Join" direction="vertical" />
    );
    expect(getByTestId("Join")).toHaveClass("join-vertical");
  });
  it("renders with direction", () => {
    const { getByTestId } = render(<Join data-testid="Join" responsive />);
    expect(getByTestId("Join")).toHaveClass("join-vertical lg:join-horizontal");
  });
});
