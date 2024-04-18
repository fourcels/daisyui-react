import { render } from "@testing-library/react";
import { createRef } from "react";
import { ThemeController } from "./ThemeController";

describe("ThemeController", () => {
  it("Should render ThemeController", () => {
    const { getByTestId } = render(
      <ThemeController data-testid="ThemeController" />
    );
    expect(getByTestId("ThemeController")).toBeInTheDocument();
  });

  it("Should forward the ref to the root element", () => {
    const ref = createRef<HTMLInputElement>();
    render(<ThemeController ref={ref} />);
    expect(ref.current).toBeInTheDocument();
  });

  it("renders with checked", () => {
    const { getByTestId } = render(
      <ThemeController data-testid="ThemeController" checked />
    );
    expect(getByTestId("ThemeController")).toBeChecked();
  });
  it("renders with label", () => {
    const { getByTestId } = render(
      <ThemeController label={<div data-testid="foo"></div>} />
    );
    expect(getByTestId("foo")).toBeInTheDocument();
  });
  it("renders with labelAlt", () => {
    const { getByTestId } = render(
      <ThemeController labelAlt={<div data-testid="foo"></div>} />
    );
    expect(getByTestId("foo")).toBeInTheDocument();
  });
  it("checkbox renders with checked", () => {
    const { getByTestId } = render(
      <ThemeController.Checkbox
        data-testid="ThemeController.Checkbox"
        checked
      />
    );
    expect(getByTestId("ThemeController.Checkbox")).toBeChecked();
  });
  it("checkbox renders with label", () => {
    const { getByTestId } = render(
      <ThemeController.Checkbox label={<div data-testid="foo"></div>} />
    );
    expect(getByTestId("foo")).toBeInTheDocument();
  });
  it("swap renders with checked", () => {
    const { getByTestId } = render(
      <ThemeController.Swap data-testid="ThemeController.Swap" checked />
    );
    expect(getByTestId("ThemeController.Swap")).toBeChecked();
  });
  it("swap renders with effect", () => {
    const { container } = render(
      <ThemeController.Swap effect="flip"></ThemeController.Swap>
    );
    expect(container.firstElementChild).toHaveClass("swap-flip");
  });
});
