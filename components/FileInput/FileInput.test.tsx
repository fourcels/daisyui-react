import { render } from "@testing-library/react";
import { createRef } from "react";
import { FileInput } from "./FileInput";

describe("FileInput", () => {
  it("Should render FileInput", () => {
    const { getByTestId } = render(<FileInput data-testid="FileInput" />);
    expect(getByTestId("FileInput")).toBeInTheDocument();
  });

  it("Should forward the ref to the root element", () => {
    const ref = createRef<HTMLInputElement>();
    render(<FileInput ref={ref} />);
    expect(ref.current).toBeInTheDocument();
  });

  it("renders with size", () => {
    const { getByTestId } = render(
      <FileInput size="lg" data-testid="FileInput" />
    );
    expect(getByTestId("FileInput")).toHaveClass("file-input-lg");
  });
  it("renders with color", () => {
    const { getByTestId } = render(
      <FileInput color="primary" data-testid="FileInput" />
    );
    expect(getByTestId("FileInput")).toHaveClass("file-input-primary");
  });
});
