import { render } from "@testing-library/react";
import { createRef } from "react";
import { Stats } from "./Stats";

describe("Stats", () => {
  it("Should render Stats", () => {
    const { getByTestId } = render(<Stats data-testid="Stats" />);
    expect(getByTestId("Stats")).toBeInTheDocument();
  });

  it("Should forward the ref to the root element", () => {
    const ref = createRef<HTMLDivElement>();
    render(<Stats ref={ref} />);
    expect(ref.current).toBeInTheDocument();
  });

  it("renders with center", () => {
    const { getByTestId } = render(
      <Stats center>
        <Stats.Stat data-testid="Stats.Stat"></Stats.Stat>
      </Stats>
    );
    expect(getByTestId("Stats.Stat")).toHaveClass("place-items-center");
  });
  it("renders with vertical", () => {
    const { getByTestId } = render(
      <Stats vertical data-testid="Stats"></Stats>
    );
    expect(getByTestId("Stats")).toHaveClass("stats-vertical");
  });
  it("renders with responsive", () => {
    const { getByTestId } = render(
      <Stats responsive data-testid="Stats"></Stats>
    );
    expect(getByTestId("Stats")).toHaveClass(
      "stats-vertical lg:stats-horizontal"
    );
  });
});
