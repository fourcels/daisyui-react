import { render } from "@testing-library/react";
import { createRef } from "react";
import { Avatar } from "./Avatar";

describe("Avatar", () => {
  it("renders a default state", () => {
    const { getByTestId } = render(<Avatar data-testid="Avatar">Test</Avatar>);
    expect(getByTestId("Avatar")).toBeInTheDocument();
  });
  it("Should forward the ref to the root element", () => {
    const ref = createRef<HTMLDivElement>();
    render(<Avatar ref={ref} />);
    expect(ref.current).toBeInTheDocument();
  });
  it("renders with src", () => {
    const { getByTestId } = render(
      <Avatar
        src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
        data-testid="Avatar"
      />
    );
    expect(getByTestId("Avatar").querySelector("img")).toBeInTheDocument();
  });
  it("renders a shape", () => {
    const { getByTestId } = render(
      <Avatar shape="circle" data-testid="Avatar">
        Test
      </Avatar>
    );
    expect(getByTestId("Avatar").firstElementChild).toHaveClass("rounded-full");
  });
  it("renders a indicator", () => {
    const { getByTestId } = render(
      <Avatar indicator="online" data-testid="Avatar">
        Test
      </Avatar>
    );
    expect(getByTestId("Avatar")).toHaveClass("online");
  });
  it("renders a size", () => {
    const { getByTestId } = render(
      <Avatar size="lg" data-testid="Avatar">
        Test
      </Avatar>
    );
    expect(getByTestId("Avatar").firstElementChild).toHaveClass("w-24");
  });

  it("renders a color", () => {
    const { getByTestId } = render(
      <Avatar color="primary" data-testid="Avatar">
        Test
      </Avatar>
    );
    expect(getByTestId("Avatar").firstElementChild).toHaveClass("bg-primary");
  });
  it("renders a ring", () => {
    const { getByTestId } = render(
      <Avatar ring="primary" data-testid="Avatar">
        Test
      </Avatar>
    );
    expect(getByTestId("Avatar").firstElementChild).toHaveClass(
      "avatar-ring ring-primary"
    );
  });
});
