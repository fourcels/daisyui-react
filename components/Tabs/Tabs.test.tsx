import { render } from "@testing-library/react";
import { createRef } from "react";
import { Tabs } from "./Tabs";

describe("Tabs", () => {
  it("Should render Tabs", () => {
    const { getByTestId } = render(<Tabs data-testid="Tabs" />);
    expect(getByTestId("Tabs")).toBeInTheDocument();
  });

  it("Should forward the ref to the root element", () => {
    const ref = createRef<HTMLDivElement>();
    render(<Tabs ref={ref} />);
    expect(ref.current).toBeInTheDocument();
  });

  it("renders with size", () => {
    const { getByTestId } = render(<Tabs data-testid="Tabs" size="lg" />);
    expect(getByTestId("Tabs")).toHaveClass("tabs-lg");
  });
  it("renders with variant", () => {
    const { getByTestId } = render(
      <Tabs data-testid="Tabs" variant="bordered" />
    );
    expect(getByTestId("Tabs")).toHaveClass("tabs-bordered");
  });
  it("renders with defaultActive", () => {
    const { getByTestId } = render(
      <Tabs defaultActive={1}>
        <Tabs.Tab></Tabs.Tab>
        <Tabs.Tab data-testid="Tabs.Tab"></Tabs.Tab>
      </Tabs>
    );
    expect(getByTestId("Tabs.Tab")).toHaveClass("tab-active");
  });
  it("renders with activeClassName", () => {
    const { getByTestId } = render(
      <Tabs defaultActive={1} activeClassName="customClassName">
        <Tabs.Tab></Tabs.Tab>
        <Tabs.Tab data-testid="Tabs.Tab"></Tabs.Tab>
      </Tabs>
    );
    expect(getByTestId("Tabs.Tab")).toHaveClass("customClassName");
  });
  it("tab renders with contentClassName", () => {
    const { getByTestId } = render(
      <Tabs>
        <Tabs.Tab data-testid="Tabs.Tab" contentClassName="customClassName">
          Tab
        </Tabs.Tab>
      </Tabs>
    );
    expect(getByTestId("Tabs.Tab").nextElementSibling).toHaveClass(
      "customClassName"
    );
  });
  it("tab renders with disabled", () => {
    const { getByTestId } = render(
      <Tabs>
        <Tabs.Tab disabled data-testid="Tabs.Tab">
          Tab
        </Tabs.Tab>
      </Tabs>
    );
    expect(getByTestId("Tabs.Tab")).toHaveClass("tab-disabled");
  });
  it("tab renders with indicator", () => {
    const { getByTestId } = render(
      <Tabs>
        <Tabs.Tab indicator={<div data-testid="foo"></div>}>Tab</Tabs.Tab>
      </Tabs>
    );
    expect(getByTestId("foo")).toBeInTheDocument();
  });
  it("tab renders with indicator", () => {
    const { getByTestId } = render(
      <Tabs>
        <Tabs.Tab label={<div data-testid="foo"></div>}>Tab</Tabs.Tab>
      </Tabs>
    );
    expect(getByTestId("foo")).toBeInTheDocument();
  });
});
