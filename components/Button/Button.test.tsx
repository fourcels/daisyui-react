import { render } from "@testing-library/react";
import { createRef } from "react";
import { Button } from "./Button";

describe("Button", () => {
  it("renders a default state", () => {
    const { getByTestId } = render(<Button data-testid="Button">Test</Button>);
    expect(getByTestId("Button")).toBeInTheDocument();
  });
  it("Should forward the ref to the root element", () => {
    const ref = createRef<HTMLButtonElement>();
    render(<Button ref={ref} />);
    expect(ref.current).toBeInTheDocument();
  });
  it("renders a size", () => {
    const { getByTestId } = render(
      <Button size="lg" data-testid="Button">
        Test
      </Button>
    );
    expect(getByTestId("Button")).toHaveClass("btn-lg");
  });

  it("renders a color", () => {
    const { getByTestId } = render(
      <Button color="primary" data-testid="Button">
        Test
      </Button>
    );
    expect(getByTestId("Button")).toHaveClass("btn-primary");
  });
  it("renders with outline variant ", () => {
    const { getByTestId } = render(
      <Button variant="outline" data-testid="Button">
        Test
      </Button>
    );
    expect(getByTestId("Button")).toHaveClass("btn-outline");
  });
  it("renders with link variant ", () => {
    const { getByTestId } = render(
      <Button variant="link" data-testid="Button">
        Test
      </Button>
    );
    expect(getByTestId("Button")).toHaveClass("btn-link");
  });
  it("renders with circle shape", () => {
    const { getByTestId } = render(
      <Button shape="circle" data-testid="Button">
        Test
      </Button>
    );
    expect(getByTestId("Button")).toHaveClass("btn-circle");
  });
  it("renders with square shape", () => {
    const { getByTestId } = render(
      <Button shape="square" data-testid="Button">
        Test
      </Button>
    );
    expect(getByTestId("Button")).toHaveClass("btn-square");
  });
  it("renders with glass", () => {
    const { getByTestId } = render(
      <Button glass data-testid="Button">
        Test
      </Button>
    );
    expect(getByTestId("Button")).toHaveClass("glass");
  });
  it("renders with wide", () => {
    const { getByTestId } = render(
      <Button wide data-testid="Button">
        Test
      </Button>
    );
    expect(getByTestId("Button")).toHaveClass("btn-wide");
  });
  it("renders with block", () => {
    const { getByTestId } = render(
      <Button block data-testid="Button">
        Test
      </Button>
    );
    expect(getByTestId("Button")).toHaveClass("btn-block");
  });
  it("renders with responsive", () => {
    const { getByTestId } = render(
      <Button responsive data-testid="Button">
        Test
      </Button>
    );
    expect(getByTestId("Button")).toHaveClass(
      "btn-xs sm:btn-sm md:btn-md lg:btn-lg"
    );
  });
  it("renders with active", () => {
    const { getByTestId } = render(
      <Button active data-testid="Button">
        Test
      </Button>
    );
    expect(getByTestId("Button")).toHaveClass("btn-active");
  });
  it("renders with disabled", () => {
    const { getByTestId } = render(
      <Button disabled data-testid="Button">
        Test
      </Button>
    );
    expect(getByTestId("Button")).toHaveClass("btn-disabled");
  });
  it("renders with no animation", () => {
    const { getByTestId } = render(
      <Button animation={false} data-testid="Button">
        Test
      </Button>
    );
    expect(getByTestId("Button")).toHaveClass("no-animation");
  });
  it("renders with start icon", () => {
    const { getByTestId } = render(
      <Button
        startIcon={<div data-testid="icon">icon</div>}
        data-testid="Button"
      >
        Test
      </Button>
    );
    expect(getByTestId("icon")).toBeInTheDocument();
  });
  it("renders with end icon", () => {
    const { getByTestId } = render(
      <Button endIcon={<div data-testid="icon">icon</div>} data-testid="Button">
        Test
      </Button>
    );
    expect(getByTestId("icon")).toBeInTheDocument();
  });
  it("renders as other tag", () => {
    const { getByTestId } = render(
      <Button as="input" data-testid="Button">
        Test
      </Button>
    );
    expect(getByTestId("Button").tagName.toLowerCase()).toBe("input");
  });
});
