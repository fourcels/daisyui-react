import { render } from "@testing-library/react";
import { createRef } from "react";
import { Indicator } from "./Indicator";
import { Badge } from "../Badge";

describe("Indicator", () => {
  it("Should render Indicator", () => {
    const { getByTestId } = render(<Indicator data-testid="Indicator" />);
    expect(getByTestId("Indicator")).toBeInTheDocument();
  });

  it("Should forward the ref to the root element", () => {
    const ref = createRef<HTMLDivElement>();
    render(<Indicator ref={ref} />);
    expect(ref.current).toBeInTheDocument();
  });
  it("renders with indicator", () => {
    const { getByTestId } = render(
      <Indicator data-testid="Indicator" indicator={<Badge />} />
    );
    expect(
      getByTestId("Indicator").querySelector(".indicator-item")
    ).toBeInTheDocument();
  });
  it("renders with horizontal", () => {
    const { getByTestId } = render(
      <Indicator
        data-testid="Indicator"
        horizontal="start"
        indicator={<Badge />}
      />
    );
    expect(
      getByTestId("Indicator").querySelector(".indicator-item")
    ).toHaveClass("indicator-start");
  });
  it("renders with vertical", () => {
    const { getByTestId } = render(
      <Indicator data-testid="Indicator" vertical="top" indicator={<Badge />} />
    );
    expect(
      getByTestId("Indicator").querySelector(".indicator-item")
    ).toHaveClass("indicator-top");
  });
});
