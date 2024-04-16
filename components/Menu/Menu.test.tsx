import { render } from "@testing-library/react";
import { createRef } from "react";
import { Menu } from "./Menu";

describe("Menu", () => {
  it("Should render Menu", () => {
    const { getByTestId } = render(<Menu data-testid="Menu" />);
    expect(getByTestId("Menu")).toBeInTheDocument();
  });

  it("Should forward the ref to the root element", () => {
    const ref = createRef<HTMLUListElement>();
    render(<Menu ref={ref} />);
    expect(ref.current).toBeInTheDocument();
  });
  it("renders with size", () => {
    const { getByTestId } = render(<Menu data-testid="Menu" size="lg" />);
    expect(getByTestId("Menu")).toHaveClass("menu-lg");
  });
  it("renders with direction", () => {
    const { getByTestId } = render(
      <Menu data-testid="Menu" direction="horizontal" />
    );
    expect(getByTestId("Menu")).toHaveClass("menu-horizontal");
  });
  it("renders with responsive", () => {
    const { getByTestId } = render(<Menu data-testid="Menu" responsive />);
    expect(getByTestId("Menu")).toHaveClass("menu-vertical lg:menu-horizontal");
  });
  it("title renders with icon", () => {
    const { getByTestId } = render(
      <Menu>
        <Menu.Title icon={<div data-testid="foo"></div>}></Menu.Title>
      </Menu>
    );
    expect(getByTestId("foo")).toBeInTheDocument();
  });
  it("item renders with disabled", () => {
    const { getByTestId } = render(
      <Menu>
        <Menu.Item data-testid="Menu.Item" disabled></Menu.Item>
      </Menu>
    );
    expect(getByTestId("Menu.Item")).toHaveClass("disabled");
  });
  it("item renders with active", () => {
    const { getByTestId } = render(
      <Menu>
        <Menu.Item data-testid="Menu.Item" active></Menu.Item>
      </Menu>
    );
    expect(getByTestId("Menu.Item")).toHaveClass("active");
  });
  it("item renders with title", () => {
    const { getByTestId } = render(
      <Menu>
        <Menu.Item data-testid="Menu.Item" title></Menu.Item>
      </Menu>
    );
    expect(getByTestId("Menu.Item")).toHaveClass("menu-title");
  });
  it("details renders with label", () => {
    const { getByTestId } = render(
      <Menu>
        <Menu.Details label={<div data-testid="foo"></div>}></Menu.Details>
      </Menu>
    );
    expect(getByTestId("foo")).toBeInTheDocument();
  });
  it("details renders with open", () => {
    const { getByTestId } = render(
      <Menu>
        <Menu.Details open data-testid="Menu.Details"></Menu.Details>
      </Menu>
    );
    expect(getByTestId("Menu.Details")).toHaveProperty("open", true);
  });
  it("details renders with menuClassName", () => {
    const { getByTestId } = render(
      <Menu>
        <Menu.Details
          menuClassName="customClassName"
          data-testid="Menu.Details"
        ></Menu.Details>
      </Menu>
    );
    expect(getByTestId("Menu.Details").querySelector("ul")).toHaveClass(
      "customClassName"
    );
  });

  it("dropdown renders with label", () => {
    const { getByTestId } = render(
      <Menu>
        <Menu.Dropdown label={<div data-testid="foo"></div>}></Menu.Dropdown>
      </Menu>
    );
    expect(getByTestId("foo")).toBeInTheDocument();
  });
  it("dropdown renders with open", () => {
    const { container } = render(
      <Menu>
        <Menu.Dropdown open></Menu.Dropdown>
      </Menu>
    );
    expect(container.querySelector(".menu-dropdown")).toHaveClass(
      "menu-dropdown-show"
    );
  });
  it("dropdown renders with menuClassName", () => {
    const { container } = render(
      <Menu>
        <Menu.Dropdown menuClassName="customClassName"></Menu.Dropdown>
      </Menu>
    );
    expect(container.querySelector(".menu-dropdown")).toHaveClass(
      "customClassName"
    );
  });
});
