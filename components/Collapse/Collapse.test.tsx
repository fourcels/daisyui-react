import { render } from "@testing-library/react";
import { createRef } from "react";
import { Collapse } from "./Collapse";

describe("Collapse", () => {
  it("Should render Collapse", () => {
    const { getByTestId } = render(<Collapse data-testid="Collapse" />);
    expect(getByTestId("Collapse")).toBeInTheDocument();
  });

  it("Should forward the ref to the root element", () => {
    const ref = createRef<HTMLDivElement>();
    render(<Collapse ref={ref} />);
    expect(ref.current).toBeInTheDocument();
  });

  it("Should apply title", () => {
    const { getByTestId } = render(
      <Collapse title={<div data-testid="title">Title</div>} />
    );
    expect(getByTestId("title")).toBeInTheDocument();
  });
  it("Should apply title className", () => {
    const { container } = render(<Collapse titleClassName="custom-class" />);
    expect(container.querySelector(".collapse-title")).toHaveClass(
      "custom-class"
    );
  });
  it("Should apply content className", () => {
    const { container } = render(<Collapse contentClassName="custom-class" />);
    expect(container.querySelector(".collapse-content")).toHaveClass(
      "custom-class"
    );
  });
  it("Should apply additional class names", () => {
    const { getByTestId } = render(
      <Collapse className="custom-class" data-testid="Collapse" />
    );
    expect(getByTestId("Collapse")).toHaveClass("custom-class");
  });
  it("Should apply icon arrow", () => {
    const { getByTestId } = render(
      <Collapse icon="arrow" data-testid="Collapse" />
    );
    expect(getByTestId("Collapse")).toHaveClass("collapse-arrow");
  });
  it("Should apply icon plus", () => {
    const { getByTestId } = render(
      <Collapse icon="plus" data-testid="Collapse" />
    );
    expect(getByTestId("Collapse")).toHaveClass("collapse-plus");
  });

  it("Should apply force open", () => {
    const { getByTestId } = render(<Collapse open data-testid="Collapse" />);
    expect(getByTestId("Collapse")).toHaveClass("collapse-open");
  });
});
