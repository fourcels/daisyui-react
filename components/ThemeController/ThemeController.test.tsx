import { render } from "@testing-library/react";
import { createRef } from "react";
import { ThemeController } from "./ThemeController";

describe("ThemeController", () => {
  it("Should render ThemeController", () => {
    const { getByTestId } = render(<ThemeController data-testid="ThemeController" />);
    expect(getByTestId("ThemeController")).toBeInTheDocument();
  });

  it("Should forward the ref to the root element", () => {
    const ref = createRef<HTMLDivElement>();
    render(<ThemeController ref={ref} />);
    expect(ref.current).toBeInTheDocument();
  });
});
