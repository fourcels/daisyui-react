import { render } from "@testing-library/react";
import { createRef } from "react";
import { Skeleton } from "./Skeleton";

describe("Skeleton", () => {
  it("Should render Skeleton", () => {
    const { getByTestId } = render(<Skeleton data-testid="Skeleton" />);
    expect(getByTestId("Skeleton")).toBeInTheDocument();
  });

  it("Should forward the ref to the root element", () => {
    const ref = createRef<HTMLDivElement>();
    render(<Skeleton ref={ref} />);
    expect(ref.current).toBeInTheDocument();
  });
});
