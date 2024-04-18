import { fireEvent, render } from "@testing-library/react";
import { createRef } from "react";
import { Rating } from "./Rating";

describe("Rating", () => {
  it("Should render Rating", () => {
    const { getByTestId } = render(<Rating data-testid="Rating" />);
    expect(getByTestId("Rating")).toBeInTheDocument();
  });

  it("Should forward the ref to the root element", () => {
    const ref = createRef<HTMLDivElement>();
    render(<Rating ref={ref} />);
    expect(ref.current).toBeInTheDocument();
  });

  it("renders with clearable", () => {
    const { getByTestId } = render(
      <Rating data-testid="Rating" defaultValue={1} />
    );
    const ratingItem = getByTestId("Rating").firstElementChild!;
    expect(ratingItem).toHaveClass("active");
    fireEvent.click(ratingItem);
    expect(ratingItem).not.toHaveClass("active");
  });
  it("renders with color", () => {
    const { getByTestId } = render(
      <Rating data-testid="Rating" defaultValue={1} color="primary" />
    );
    const ratingItem = getByTestId("Rating").firstElementChild!;
    expect(ratingItem).toHaveClass("bg-primary");
  });
  it("renders with count", () => {
    const { getByTestId } = render(<Rating data-testid="Rating" count={10} />);
    expect(getByTestId("Rating").childElementCount).toBe(10);
  });
  it("renders with half", () => {
    const { getByTestId } = render(
      <Rating data-testid="Rating" half defaultValue={1} />
    );
    const ratingItem = getByTestId("Rating").firstElementChild!;
    expect(ratingItem.firstElementChild).toHaveClass("active");
    expect(ratingItem.lastElementChild).not.toHaveClass("active");
  });
  it("renders with itemClassName", () => {
    const { getByTestId } = render(
      <Rating data-testid="Rating" itemClassName="customClassName" />
    );
    const ratingItem = getByTestId("Rating").firstElementChild!;
    expect(ratingItem).toHaveClass("customClassName");
  });
  it("renders with mask", () => {
    const { getByTestId } = render(
      <Rating data-testid="Rating" mask="circle" />
    );
    const ratingItem = getByTestId("Rating").firstElementChild!;
    expect(ratingItem).toHaveClass("mask-circle");
  });
  it("renders with size", () => {
    const { getByTestId } = render(<Rating data-testid="Rating" size="lg" />);
    expect(getByTestId("Rating")).toHaveClass("rating-lg");
  });
});
