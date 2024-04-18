import { render } from "@testing-library/react";
import { createRef } from "react";
import { Table } from "./Table";

describe("Table", () => {
  it("Should render Table", () => {
    const { getByTestId } = render(<Table data-testid="Table" />);
    expect(getByTestId("Table")).toBeInTheDocument();
  });

  it("Should forward the ref to the root element", () => {
    const ref = createRef<HTMLTableElement>();
    render(<Table ref={ref} />);
    expect(ref.current).toBeInTheDocument();
  });

  it("renders with pinRows", () => {
    const { getByTestId } = render(<Table data-testid="Table" pinRows />);
    expect(getByTestId("Table")).toHaveClass("table-pin-rows");
  });
  it("renders with pinCols", () => {
    const { getByTestId } = render(<Table data-testid="Table" pinCols />);
    expect(getByTestId("Table")).toHaveClass("table-pin-cols");
  });
  it("renders with size", () => {
    const { getByTestId } = render(<Table data-testid="Table" size="lg" />);
    expect(getByTestId("Table")).toHaveClass("table-lg");
  });
  it("renders with zebra", () => {
    const { getByTestId } = render(<Table data-testid="Table" zebra />);
    expect(getByTestId("Table")).toHaveClass("table-zebra");
  });
  it("row renders with active", () => {
    const { getByTestId } = render(
      <Table>
        <Table.Body>
          <Table.Row data-testid="Table.Row" active></Table.Row>
        </Table.Body>
      </Table>
    );
    expect(getByTestId("Table.Row")).toHaveClass("active");
  });
  it("row renders with hover", () => {
    const { getByTestId } = render(
      <Table>
        <Table.Body>
          <Table.Row data-testid="Table.Row" hover></Table.Row>
        </Table.Body>
      </Table>
    );
    expect(getByTestId("Table.Row")).toHaveClass("hover");
  });
  it("body renders with hover", () => {
    const { getByTestId } = render(
      <Table>
        <Table.Body hover>
          <Table.Row data-testid="Table.Row"></Table.Row>
        </Table.Body>
      </Table>
    );
    expect(getByTestId("Table.Row")).toHaveClass("hover");
  });
});
