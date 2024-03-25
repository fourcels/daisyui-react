import { render } from "@testing-library/react";
import { createRef } from "react";
import { Accordion } from "./Accordion";

describe("Accordion", () => {
  it("Should render Accordion", () => {
    const { getByTestId } = render(<Accordion data-testid="accordion" />);
    expect(getByTestId("accordion")).toBeInTheDocument();
  });

  it("Should forward the ref to the root element", () => {
    const ref = createRef<HTMLDivElement>();
    render(<Accordion ref={ref} />);
    expect(ref.current).toBeInTheDocument();
  });

  it("Should apply additional class names", () => {
    const { getByTestId } = render(
      <Accordion className="custom-class" data-testid="accordion" />
    );
    expect(getByTestId("accordion")).toHaveClass("custom-class");
  });
  it("Should apply join", () => {
    const { getByTestId } = render(
      <Accordion data-testid="accordion" join>
        <Accordion.Item data-testid="accordion.item"></Accordion.Item>
      </Accordion>
    );
    expect(getByTestId("accordion")).toHaveClass("join join-vertical");
    expect(getByTestId("accordion.item")).toHaveClass("join-item");
  });
});
