import { render } from "@testing-library/react";
import { createRef } from "react";
import { Artboard } from "./Artboard";

describe("Artboard", () => {
  it("renders a default state", () => {
    const { getByTestId } = render(
      <Artboard data-testid="Artboard">Test</Artboard>
    );
    expect(getByTestId("Artboard")).toBeInTheDocument();
  });
  it("Should forward the ref to the root element", () => {
    const ref = createRef<HTMLDivElement>();
    render(<Artboard ref={ref} />);
    expect(ref.current).toBeInTheDocument();
  });
  it("renders a size", () => {
    const { getByTestId } = render(
      <Artboard size="phone-1" data-testid="Artboard">
        Test
      </Artboard>
    );
    expect(getByTestId("Artboard")).toHaveClass("phone-1");
  });
  it("renders horizontal", () => {
    const { getByTestId } = render(
      <Artboard horizontal data-testid="Artboard">
        Test
      </Artboard>
    );
    expect(getByTestId("Artboard")).toHaveClass("artboard-horizontal");
  });
});
