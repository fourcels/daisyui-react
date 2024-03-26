import { render } from "@testing-library/react";
import { createRef } from "react";
import { Card } from "./Card";

describe("Card", () => {
  it("renders a default state", () => {
    const { getByTestId } = render(<Card data-testid="Card">Test</Card>);
    expect(getByTestId("Card")).toBeInTheDocument();
  });
  it("Should forward the ref to the root element", () => {
    const ref = createRef<HTMLDivElement>();
    render(<Card ref={ref} />);
    expect(ref.current).toBeInTheDocument();
  });
  it("renders with bordered", () => {
    const { getByTestId } = render(
      <Card bordered data-testid="Card">
        Test
      </Card>
    );
    expect(getByTestId("Card")).toHaveClass("card-bordered");
  });
  it("renders with side", () => {
    const { getByTestId } = render(
      <Card side data-testid="Card">
        Test
      </Card>
    );
    expect(getByTestId("Card")).toHaveClass("card-side");
  });
  it("renders with responsive", () => {
    const { getByTestId } = render(
      <Card responsive data-testid="Card">
        Test
      </Card>
    );
    expect(getByTestId("Card")).toHaveClass("lg:card-side");
  });
  it("renders with compact", () => {
    const { getByTestId } = render(
      <Card compact data-testid="Card">
        Test
      </Card>
    );
    expect(getByTestId("Card")).toHaveClass("card-compact");
  });
  it("renders with glass", () => {
    const { getByTestId } = render(
      <Card glass data-testid="Card">
        Test
      </Card>
    );
    expect(getByTestId("Card")).toHaveClass("glass");
  });
  it("renders with shadow", () => {
    const { getByTestId } = render(
      <Card shadow data-testid="Card">
        Test
      </Card>
    );
    expect(getByTestId("Card")).toHaveClass("shadow-md");
  });
  it("renders with image full", () => {
    const { getByTestId } = render(
      <Card imageFull data-testid="Card">
        Test
      </Card>
    );
    expect(getByTestId("Card")).toHaveClass("image-full");
  });
});
