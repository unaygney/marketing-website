import Button from "./index";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Button", () => {
  it("should render the button without crashing", () => {
    render(<Button>Button</Button>);
  });
});
