import { render } from "@testing-library/react";
import { createRef } from "react";
import { Loading } from "./Loading";

describe("Loading", () => {
  it("Should render Loading", () => {
    const { getByTestId } = render(<Loading data-testid="Loading" />);
    expect(getByTestId("Loading")).toBeInTheDocument();
  });

  it("Should forward the ref to the root element", () => {
    const ref = createRef<HTMLDivElement>();
    render(<Loading ref={ref} />);
    expect(ref.current).toBeInTheDocument();
  });
  it("renders with size", () => {
    const { getByTestId } = render(<Loading data-testid="Loading" size="lg" />);
    expect(getByTestId("Loading")).toHaveClass("loading-lg");
  });
  it("renders with variant", () => {
    const { getByTestId } = render(
      <Loading data-testid="Loading" variant="ball" />
    );
    expect(getByTestId("Loading")).toHaveClass("loading-ball");
  });
  it("renders with color", () => {
    const { getByTestId } = render(
      <Loading data-testid="Loading" color="primary" />
    );
    expect(getByTestId("Loading")).toHaveClass("text-primary");
  });
});
