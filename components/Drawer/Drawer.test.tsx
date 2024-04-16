import { render } from "@testing-library/react";
import { createRef } from "react";
import { Drawer } from "./Drawer";

describe("Drawer", () => {
  it("Should render Drawer", () => {
    const { getByTestId } = render(<Drawer data-testid="Drawer" />);
    expect(getByTestId("Drawer")).toBeInTheDocument();
  });

  it("Should forward the ref to the root element", () => {
    const ref = createRef<HTMLDivElement>();
    render(<Drawer ref={ref} />);
    expect(ref.current).toBeInTheDocument();
  });

  it("renders width end", () => {
    const { getByTestId } = render(<Drawer data-testid="Drawer" end />);
    expect(getByTestId("Drawer")).toHaveClass("drawer-end");
  });
  it("renders width responsive", () => {
    const { getByTestId } = render(<Drawer data-testid="Drawer" responsive />);
    expect(getByTestId("Drawer")).toHaveClass("lg:drawer-open");
  });
  it("renders width overlay", () => {
    const { getByTestId } = render(
      <Drawer overlay>
        <Drawer.Side data-testid="Drawer.Side"></Drawer.Side>
      </Drawer>
    );
    expect(
      getByTestId("Drawer.Side").querySelector(".drawer-overlay")
    ).toBeInTheDocument();
  });
  it("renders width open", () => {
    const { getByTestId } = render(<Drawer data-testid="Drawer" open></Drawer>);
    expect(getByTestId("Drawer").querySelector(".drawer-toggle")).toBeChecked();
  });
});
