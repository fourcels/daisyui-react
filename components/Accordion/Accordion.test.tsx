import { render } from "@testing-library/react";
import { createRef } from "react";
import { Accordion } from "./Accordion";

describe("Accordion", () => {
  it("Should render Accordion", () => {
    const { getByTestId } = render(<Accordion data-testid="Accordion" />);
    expect(getByTestId("Accordion")).toBeInTheDocument();
  });

  it("Should forward the ref to the root element", () => {
    const ref = createRef<HTMLDivElement>();
    render(<Accordion ref={ref} />);
    expect(ref.current).toBeInTheDocument();
  });

  it("Should apply additional class names", () => {
    const { getByTestId } = render(
      <Accordion className="custom-class" data-testid="Accordion" />
    );
    expect(getByTestId("Accordion")).toHaveClass("custom-class");
  });
  it("Should apply join", () => {
    const { getByTestId } = render(
      <Accordion data-testid="Accordion" join>
        <Accordion.Item data-testid="Accordion.Item"></Accordion.Item>
      </Accordion>
    );
    expect(getByTestId("Accordion")).toHaveClass("join join-vertical");
    expect(getByTestId("Accordion.Item")).toHaveClass("join-item");
  });
});
