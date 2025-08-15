import { render, screen } from "@testing-library/react";
import App from "./App";

it("should render hello world correctly", () => {
  render(<App />);
  const element = screen.getByText("Hello world");

  expect(element).toBeInTheDocument();
});
