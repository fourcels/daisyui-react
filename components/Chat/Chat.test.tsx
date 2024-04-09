import { render, screen } from "@testing-library/react";
import { createRef } from "react";
import { Chat } from "./Chat";

describe("Chat", () => {
  it("Should render Chat", () => {
    const { getByTestId } = render(<Chat data-testid="Chat"></Chat>);
    expect(getByTestId("Chat")).toBeInTheDocument();
  });
  it("Should forward the ref to the root element", () => {
    const ref = createRef<HTMLDivElement>();
    render(<Chat ref={ref} />);
    expect(ref.current).toBeInTheDocument();
  });
  it("renders with position", () => {
    const { getByTestId } = render(<Chat position="end" data-testid="Chat" />);
    expect(getByTestId("Chat")).toHaveClass("chat-end");
  });
  it("renders bubble with color", () => {
    const { getByTestId } = render(
      <Chat>
        <Chat.Bubble data-testid="Chat.Bubble" color="primary"></Chat.Bubble>
      </Chat>
    );
    expect(getByTestId("Chat.Bubble")).toHaveClass("chat-bubble-primary");
  });
});
