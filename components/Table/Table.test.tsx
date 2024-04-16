import { render } from "@testing-library/react";
import { createRef } from "react";
import { Table } from "./Table";

describe("Table", () => {
  it("Should render Table", () => {
    const { getByTestId } = render(<Table data-testid="Table" />);
    expect(getByTestId("Table")).toBeInTheDocument();
  });

  it("Should forward the ref to the root element", () => {
    const ref = createRef<HTMLDivElement>();
    render(<Table ref={ref} />);
    expect(ref.current).toBeInTheDocument();
  });
});
