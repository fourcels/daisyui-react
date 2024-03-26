import { render } from "@testing-library/react";
import { createRef } from "react";
import { Breadcrumbs } from "./Breadcrumbs";

describe("Breadcrumbs", () => {
  it("renders a default state", () => {
    const { getByTestId } = render(<Breadcrumbs data-testid="Breadcrumbs" />);
    expect(getByTestId("Breadcrumbs")).toBeInTheDocument();
  });
  it("Should forward the ref to the root element", () => {
    const ref = createRef<HTMLDivElement>();
    render(<Breadcrumbs ref={ref} />);
    expect(ref.current).toBeInTheDocument();
  });

  it("renders item with icon", () => {
    const { getByTestId } = render(
      <Breadcrumbs>
        <Breadcrumbs.Item
          icon={<div data-testid="icon">icon</div>}
          data-testid="Breadcrumbs.Item"
        >
          Test
        </Breadcrumbs.Item>
      </Breadcrumbs>
    );
    expect(getByTestId("icon")).toBeInTheDocument();
  });
});
