import { render } from "@testing-library/react";
import { createRef } from "react";
import { Pagination } from "./Pagination";

describe("Pagination", () => {
  it("Should render Pagination", () => {
    const { getByTestId } = render(<Pagination data-testid="Pagination" />);
    expect(getByTestId("Pagination")).toBeInTheDocument();
  });

  it("Should forward the ref to the root element", () => {
    const ref = createRef<HTMLDivElement>();
    render(<Pagination ref={ref} />);
    expect(ref.current).toBeInTheDocument();
  });
  it("renders with size", () => {
    const { getByTestId } = render(
      <Pagination size="lg">
        <Pagination.Item data-testid="Pagination.Item">1</Pagination.Item>
      </Pagination>
    );
    expect(getByTestId("Pagination.Item")).toHaveClass("btn-lg");
  });
});
