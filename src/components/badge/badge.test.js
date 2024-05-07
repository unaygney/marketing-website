import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Badge from "./index.jsx";

describe("Badge", () => {
  it("should render the badge component without crashing", () => {
    render(<Badge />);
  });

  it("should render with small size", () => {
    render(<Badge size="small" />);

    const badgeElement = screen.getByText("Label");
    expect(badgeElement).toHaveClass("text-xs px-1.5 py-0.5");
  });

  it("should render with medium size", () => {
    render(<Badge size="medium" />);

    const badgeElement = screen.getByText("Label");
    expect(badgeElement).toHaveClass("text-sm px-2 py-0.5");
  });

  it("should render with large size", () => {
    render(<Badge size="large" />);

    const badgeElement = screen.getByText("Label");
    expect(badgeElement).toHaveClass("text-sm px-2.5 py-1");
  });
});
