import { render } from "@testing-library/react";
import { createRef } from "react";
import { Select } from "./Select";

describe("Select", () => {
  it("Should render Select", () => {
    const { getByTestId } = render(<Select data-testid="Select" />);
    expect(getByTestId("Select")).toBeInTheDocument();
  });

  it("Should forward the ref to the root element", () => {
    const ref = createRef<HTMLSelectElement>();
    render(<Select ref={ref} />);
    expect(ref.current).toBeInTheDocument();
  });
  it("renders with clearable", () => {
    const { container } = render(
      <Select
        defaultValue="Homer"
        items={["Homer", "Marge", "Bart", "Lisa", "Maggie"]}
      />
    );
    expect(container.querySelector(".select-clearable")).toBeInTheDocument();
  });
  it("renders with color", () => {
    const { getByTestId } = render(
      <Select data-testid="Select" color="primary" />
    );
    expect(getByTestId("Select")).toHaveClass("select-primary");
  });
  it("renders with disabled", () => {
    const { getByTestId } = render(<Select data-testid="Select" disabled />);
    expect(getByTestId("Select")).toBeDisabled();
  });
  it("renders with placeholder", () => {
    const { getByTestId } = render(
      <Select data-testid="Select" placeholder="placeholder" />
    );
    expect(getByTestId("Select").firstElementChild).toHaveTextContent(
      "placeholder"
    );
  });
  it("renders with size", () => {
    const { getByTestId } = render(<Select data-testid="Select" size="lg" />);
    expect(getByTestId("Select")).toHaveClass("select-lg");
  });
  it("renders with wrapperClassName", () => {
    const { container } = render(<Select wrapperClassName="customClassName" />);
    expect(container.querySelector(".select-wrapper")).toHaveClass(
      "customClassName"
    );
  });
});
