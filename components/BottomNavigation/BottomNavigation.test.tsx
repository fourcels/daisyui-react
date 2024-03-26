import { render } from "@testing-library/react";
import { createRef } from "react";
import { BottomNavigation } from "./BottomNavigation";

describe("BottomNavigation", () => {
  it("renders a default state", () => {
    const { getByTestId } = render(
      <BottomNavigation data-testid="BottomNavigation" />
    );
    expect(getByTestId("BottomNavigation")).toBeInTheDocument();
  });
  it("Should forward the ref to the root element", () => {
    const ref = createRef<HTMLDivElement>();
    render(<BottomNavigation ref={ref} />);
    expect(ref.current).toBeInTheDocument();
  });
  it("renders a size", () => {
    const { getByTestId } = render(
      <BottomNavigation size="lg" data-testid="BottomNavigation">
        <BottomNavigation.Item>Test</BottomNavigation.Item>
      </BottomNavigation>
    );
    expect(getByTestId("BottomNavigation")).toHaveClass("btm-nav-lg");
  });

  it("renders a color", () => {
    const { getByTestId } = render(
      <BottomNavigation color="primary" data-testid="BottomNavigation">
        <BottomNavigation.Item data-testid="BottomNavigation.Item">
          Test
        </BottomNavigation.Item>
      </BottomNavigation>
    );
    expect(getByTestId("BottomNavigation.Item")).toHaveClass("text-primary");
  });
  it("renders item with icon", () => {
    const { getByTestId } = render(
      <BottomNavigation>
        <BottomNavigation.Item icon={<div data-testid="icon">icon</div>}>
          Test
        </BottomNavigation.Item>
      </BottomNavigation>
    );
    expect(getByTestId("icon")).toBeInTheDocument();
  });
  it("renders item with disabled", () => {
    const { getByTestId } = render(
      <BottomNavigation>
        <BottomNavigation.Item disabled data-testid="BottomNavigation.Item">
          Test
        </BottomNavigation.Item>
      </BottomNavigation>
    );
    expect(getByTestId("BottomNavigation.Item")).toHaveClass("disabled");
  });
  it("renders item with active", () => {
    const { getByTestId } = render(
      <BottomNavigation>
        <BottomNavigation.Item active data-testid="BottomNavigation.Item">
          Test
        </BottomNavigation.Item>
      </BottomNavigation>
    );
    expect(getByTestId("BottomNavigation.Item")).toHaveClass("active");
  });
  it("renders item with color", () => {
    const { getByTestId } = render(
      <BottomNavigation>
        <BottomNavigation.Item
          color="primary"
          data-testid="BottomNavigation.Item"
        >
          Test
        </BottomNavigation.Item>
      </BottomNavigation>
    );
    expect(getByTestId("BottomNavigation.Item")).toHaveClass("text-primary");
  });
});
