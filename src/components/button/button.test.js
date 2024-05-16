import Button from "./index";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Button Variant classes should be correct ", () => {
  it("should render the button without crashing", () => {
    render(<Button>Button</Button>);
  });
  it("Should the button have the correct classes as default props", () => {
    render(<Button>Button</Button>);
    const button = screen.getByText("Button");
    expect(button).toHaveClass(
      "rounded font-medium transition-colors duration-300 ease-in-out",
    );
  });
  it("Should the button have the correct classes as primary variant", () => {
    render(<Button variant="primary">Button</Button>);
    const button = screen.getByText("Button");
    expect(button).toHaveClass(
      "customs-shadow bg-indigo-700 text-white  hover:bg-indigo-800 focus:outline-indigo-200 disabled:bg-[#f5f5f5] disabled:text-neutral-400",
    );
  });
  it("Should the button have the correct classes as secondary variant", () => {
    render(<Button variant="secondary">Button</Button>);
    const button = screen.getByText("Button");
    expect(button).toHaveClass(
      "custom-shadow border-[0.5px] border-neutral-200 bg-white text-neutral-900 hover:bg-[#fafafa] focus:outline-indigo-200  disabled:border-none disabled:bg-[#f5f5f5] disabled:text-neutral-400 disabled:shadow-none",
    );
  });

  it("Should the button have the correct classes as tertiary variant", () => {
    render(<Button variant="tertiary">Button</Button>);
    const button = screen.getByText("Button");
    expect(button).toHaveClass(
      "text-indigo-700 hover:bg-[#fafafa] focus:outline-indigo-200 disabled:bg-transparent  disabled:text-neutral-400",
    );
  });

  it("Should the button have the correct classes as destructive variant", () => {
    render(<Button variant="destructive">Button</Button>);
    const button = screen.getByText("Button");
    expect(button).toHaveClass(
      "bg-red-600 text-white  hover:bg-red-700  focus:bg-red-700   focus:outline-red-200    disabled:bg-transparent disabled:text-neutral-400",
    );
  });
});
