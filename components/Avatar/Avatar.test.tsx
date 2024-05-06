import { render } from "@testing-library/react";
import { createRef } from "react";
import { Avatar } from "./Avatar";

describe("Avatar", () => {
  it("Should render Avatar", () => {
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
        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
        data-testid="Avatar"
      />
    );
    expect(getByTestId("Avatar").querySelector("img")).toBeInTheDocument();
  });
  it("renders with shape", () => {
    const { getByTestId } = render(
      <Avatar shape="circle" data-testid="Avatar">
        Test
      </Avatar>
    );
    expect(getByTestId("Avatar").firstElementChild).toHaveClass("rounded-full");
  });
  it("renders with indicator", () => {
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

  it("renders with color", () => {
    const { getByTestId } = render(
      <Avatar color="primary" data-testid="Avatar">
        Test
      </Avatar>
    );
    expect(getByTestId("Avatar").firstElementChild).toHaveClass("bg-primary");
  });
  it("renders with ring", () => {
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
