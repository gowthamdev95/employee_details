import { render, screen } from "@testing-library/react";
import AuthErrorPage from "../401Error";

describe("401 component", () => {
  it("should render AuthErrorPage component correctly", () => {
    render(<AuthErrorPage />);
    const titleEl = screen.getByText(/401/);
    expect(titleEl).toBeInTheDocument();
  });
});