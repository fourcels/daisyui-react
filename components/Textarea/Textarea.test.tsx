import { render } from "@testing-library/react";
import { createRef } from "react";
import { Textarea } from "./Textarea";

describe("Textarea", () => {
  it("Should render Textarea", () => {
    const { getByTestId } = render(<Textarea data-testid="Textarea" />);
    expect(getByTestId("Textarea")).toBeInTheDocument();
  });

  it("Should forward the ref to the root element", () => {
    const ref = createRef<HTMLDivElement>();
    render(<Textarea ref={ref} />);
    expect(ref.current).toBeInTheDocument();
  });
});
