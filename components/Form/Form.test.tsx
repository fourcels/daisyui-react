import { render } from "@testing-library/react";
import { createRef } from "react";
import { Form } from "./Form";

describe("Form", () => {
  it("Should render Form", () => {
    const { getByTestId } = render(<Form data-testid="Form" />);
    expect(getByTestId("Form")).toBeInTheDocument();
  });

  it("Should forward the ref to the root element", () => {
    const ref = createRef<HTMLFormElement>();
    render(<Form ref={ref} />);
    expect(ref.current).toBeInTheDocument();
  });

  it("control renders with label", () => {
    const { getByTestId } = render(
      <Form.Control data-testid="Form.Control" label="customLabel" />
    );
    expect(
      getByTestId("Form.Control").querySelector(".label-text")
    ).toHaveTextContent("customLabel");
  });
  it("control renders with alt label", () => {
    const { getByTestId } = render(
      <Form.Control data-testid="Form.Control" labelAlt="customLabel" />
    );
    expect(
      getByTestId("Form.Control").querySelector(".label-text-alt")
    ).toHaveTextContent("customLabel");
  });
});
