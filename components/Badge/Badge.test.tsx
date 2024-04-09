import { render } from "@testing-library/react";
import { createRef } from "react";
import { Badge } from "./Badge";

describe("Badge", () => {
  it("Should render Badge", () => {
    const { getByTestId } = render(<Badge data-testid="Badge">Test</Badge>);
    expect(getByTestId("Badge")).toBeInTheDocument();
  });
  it("Should forward the ref to the root element", () => {
    const ref = createRef<HTMLDivElement>();
    render(<Badge ref={ref} />);
    expect(ref.current).toBeInTheDocument();
  });
  it("renders with size", () => {
    const { getByTestId } = render(
      <Badge size="lg" data-testid="Badge">
        Test
      </Badge>
    );
    expect(getByTestId("Badge")).toHaveClass("badge-lg");
  });

  it("renders with color", () => {
    const { getByTestId } = render(
      <Badge color="primary" data-testid="Badge">
        Test
      </Badge>
    );
    expect(getByTestId("Badge")).toHaveClass("badge-primary");
  });
  it("renders with outline", () => {
    const { getByTestId } = render(
      <Badge outline data-testid="Badge">
        Test
      </Badge>
    );
    expect(getByTestId("Badge")).toHaveClass("badge-outline");
  });
});
