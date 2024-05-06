import { render } from "@testing-library/react";
import { createRef } from "react";
import { Hero } from "./Hero";

describe("Hero", () => {
  it("Should render Hero", () => {
    const { getByTestId } = render(<Hero data-testid="Hero" />);
    expect(getByTestId("Hero")).toBeInTheDocument();
  });

  it("Should forward the ref to the root element", () => {
    const ref = createRef<HTMLDivElement>();
    render(<Hero ref={ref} />);
    expect(ref.current).toBeInTheDocument();
  });
  it("renders with overlay", () => {
    const { getByTestId } = render(
      <Hero
        data-testid="Hero"
        overlay="https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg"
      />
    );
    const hero = getByTestId("Hero");
    expect(hero).toHaveStyle({
      backgroundImage:
        "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
    });
    expect(hero.querySelector(".hero-overlay")).toBeInTheDocument();
  });
});
