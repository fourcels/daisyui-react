import { render } from "@testing-library/react";
import { createRef } from "react";
import { Tabs } from "./Tabs";

describe("Tabs", () => {
  it("Should render Tabs", () => {
    const { getByTestId } = render(<Tabs data-testid="Tabs" />);
    expect(getByTestId("Tabs")).toBeInTheDocument();
  });

  it("Should forward the ref to the root element", () => {
    const ref = createRef<HTMLDivElement>();
    render(<Tabs ref={ref} />);
    expect(ref.current).toBeInTheDocument();
  });
});
