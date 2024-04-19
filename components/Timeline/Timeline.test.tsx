import { render } from "@testing-library/react";
import { createRef } from "react";
import { Timeline } from "./Timeline";

describe("Timeline", () => {
  it("Should render Timeline", () => {
    const { getByTestId } = render(<Timeline data-testid="Timeline" />);
    expect(getByTestId("Timeline")).toBeInTheDocument();
  });

  it("Should forward the ref to the root element", () => {
    const ref = createRef<HTMLUListElement>();
    render(<Timeline ref={ref} />);
    expect(ref.current).toBeInTheDocument();
  });

  it("renders with compact", () => {
    const { getByTestId } = render(<Timeline data-testid="Timeline" compact />);
    expect(getByTestId("Timeline")).toHaveClass("timeline-compact");
  });
  it("renders with middle", () => {
    const { getByTestId } = render(
      <Timeline middle>
        <Timeline.Item data-testid="Timeline.Item"></Timeline.Item>
      </Timeline>
    );
    expect(
      getByTestId("Timeline.Item").querySelector(".timeline-middle")
    ).toBeInTheDocument();
  });
  it("renders with responsive", () => {
    const { getByTestId } = render(
      <Timeline data-testid="Timeline" responsive />
    );
    expect(getByTestId("Timeline")).toHaveClass(
      "timeline-vertical lg:timeline-horizontal"
    );
  });
  it("renders with snap", () => {
    const { getByTestId } = render(<Timeline data-testid="Timeline" snap />);
    expect(getByTestId("Timeline")).toHaveClass("timeline-snap-icon");
  });
  it("renders with vertical", () => {
    const { getByTestId } = render(
      <Timeline data-testid="Timeline" vertical />
    );
    expect(getByTestId("Timeline")).toHaveClass("timeline-vertical");
  });
  it("item renders with active", () => {
    const { getByTestId } = render(
      <Timeline>
        <Timeline.Item data-testid="Timeline.Item" active></Timeline.Item>
      </Timeline>
    );
    expect(getByTestId("Timeline.Item")).toHaveClass("active");
  });
  it("item renders with connect", () => {
    const { getByTestId } = render(
      <Timeline>
        <Timeline.Item data-testid="Timeline.Item1"></Timeline.Item>
        <Timeline.Item data-testid="Timeline.Item2"></Timeline.Item>
        <Timeline.Item data-testid="Timeline.Item3"></Timeline.Item>
      </Timeline>
    );
    const item1 = getByTestId("Timeline.Item1");
    expect(item1.querySelector(".timeline-connect-end")).toBeInTheDocument();

    const item2 = getByTestId("Timeline.Item2");
    expect(item2.querySelector(".timeline-connect-start")).toBeInTheDocument();
    expect(item2.querySelector(".timeline-connect-end")).toBeInTheDocument();
    const item3 = getByTestId("Timeline.Item3");
    expect(item3.querySelector(".timeline-connect-start")).toBeInTheDocument();
  });
  it("start renders with box", () => {
    const { getByTestId } = render(
      <Timeline>
        <Timeline.Item>
          <Timeline.Start box data-testid="Timeline.Start"></Timeline.Start>
        </Timeline.Item>
      </Timeline>
    );

    expect(getByTestId("Timeline.Start")).toHaveClass("timeline-box");
  });
  it("end renders with box", () => {
    const { getByTestId } = render(
      <Timeline>
        <Timeline.Item>
          <Timeline.End box data-testid="Timeline.End"></Timeline.End>
        </Timeline.Item>
      </Timeline>
    );

    expect(getByTestId("Timeline.End")).toHaveClass("timeline-box");
  });
});
