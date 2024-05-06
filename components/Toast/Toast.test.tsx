import { render } from "@testing-library/react";
import { createRef } from "react";
import { Toast } from "./Toast";

describe("Toast", () => {
  it("Should render Toast", () => {
    const { getByTestId } = render(<Toast data-testid="Toast" />);
    expect(getByTestId("Toast")).toBeInTheDocument();
  });

  it("Should forward the ref to the root element", () => {
    const ref = createRef<HTMLDivElement>();
    render(<Toast ref={ref} />);
    expect(ref.current).toBeInTheDocument();
  });
  it("renders with color", () => {
    const { getByTestId } = render(<Toast data-testid="Toast" color="info" />);
    expect(getByTestId("Toast").querySelector(".alert")).toHaveClass(
      "alert-info"
    );
  });
  it("renders with horizontal", () => {
    const { getByTestId } = render(
      <Toast data-testid="Toast" horizontal="start" />
    );
    expect(getByTestId("Toast")).toHaveClass("toast-start");
  });
  it("renders with vertical", () => {
    const { getByTestId } = render(
      <Toast data-testid="Toast" vertical="top" />
    );
    expect(getByTestId("Toast")).toHaveClass("toast-top");
  });
});
