import { render } from "@testing-library/react";
import { createRef } from "react";
import { Countdown } from "./Countdown";

describe("Countdown", () => {
  it("Should render Countdown", () => {
    const { getByTestId } = render(<Countdown data-testid="Countdown" />);
    expect(getByTestId("Countdown")).toBeInTheDocument();
  });

  it("Should forward the ref to the root element", () => {
    const ref = createRef<HTMLSpanElement>();
    render(<Countdown ref={ref} />);
    expect(ref.current).toBeInTheDocument();
  });
  it("renders with wrapperClassName", () => {
    const { container } = render(
      <Countdown wrapperClassName="customClassName" />
    );
    expect(container.querySelector(".countdown-wrapper")).toHaveClass(
      "customClassName"
    );
  });
  it("renders with vertical", () => {
    const { container } = render(<Countdown vertical />);
    expect(container.querySelector(".countdown-wrapper")).toHaveClass(
      "flex flex-col"
    );
  });
  it("renders with box", () => {
    const { container } = render(<Countdown box />);
    expect(container.querySelector(".countdown-wrapper")).toHaveClass(
      "p-2 bg-neutral rounded-box text-neutral-content"
    );
  });
  it("renders with value", () => {
    const { getByTestId } = render(
      <Countdown value={10} data-testid="Countdown" />
    );
    expect(getByTestId("Countdown").firstElementChild).toHaveStyle({
      "--value": "10",
    });
  });
});
