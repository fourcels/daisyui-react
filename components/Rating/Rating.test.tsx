import { render } from "@testing-library/react";
import { createRef } from "react";
import { Rating } from "./Rating";

describe("Rating", () => {
  it("Should render Rating", () => {
    const { getByTestId } = render(<Rating data-testid="Rating" />);
    expect(getByTestId("Rating")).toBeInTheDocument();
  });

  it("Should forward the ref to the root element", () => {
    const ref = createRef<HTMLDivElement>();
    render(<Rating ref={ref} />);
    expect(ref.current).toBeInTheDocument();
  });
});
