import { render } from "@testing-library/react";
import { createRef } from "react";
import { Modal } from "./Modal";

describe("Modal", () => {
  it("Should render Modal", () => {
    const { getByTestId } = render(<Modal data-testid="Modal" />);
    expect(getByTestId("Modal")).toBeInTheDocument();
  });

  it("Should forward the ref to the root element", () => {
    const ref = createRef<HTMLDialogElement>();
    render(<Modal ref={ref} />);
    expect(ref.current).toBeInTheDocument();
  });
  it("renders with open", () => {
    const { getByTestId } = render(<Modal data-testid="Modal" open />);
    expect(getByTestId("Modal")).toHaveClass("modal-open");
  });
  it("renders with position", () => {
    const { getByTestId } = render(
      <Modal data-testid="Modal" position="bottom" />
    );
    expect(getByTestId("Modal")).toHaveClass("modal-bottom");
  });
  it("renders with responsive", () => {
    const { getByTestId } = render(<Modal data-testid="Modal" responsive />);
    expect(getByTestId("Modal")).toHaveClass("modal-bottom sm:modal-middle");
  });
  it("renders with backdrop", () => {
    const { getByTestId } = render(<Modal data-testid="Modal" backdrop />);
    expect(
      getByTestId("Modal").querySelector(".modal-backdrop")
    ).toBeInTheDocument();
  });
  it("renders with closable", () => {
    const { getByTestId } = render(<Modal data-testid="Modal" closable />);
    expect(
      getByTestId("Modal").querySelector(".modal-close")
    ).toBeInTheDocument();
  });
  it("renders with contentClassName", () => {
    const { getByTestId } = render(
      <Modal data-testid="Modal" contentClassName="customClassName" />
    );
    expect(getByTestId("Modal").querySelector(".modal-box")).toHaveClass(
      "customClassName"
    );
  });
  it("renders with trigger", () => {
    const { getByTestId } = render(
      <Modal trigger={<div data-testid="foo"></div>} />
    );
    expect(getByTestId("foo")).toBeInTheDocument();
  });
});
