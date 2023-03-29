import { render, screen } from "@testing-library/react";
import ErrorPage from "../ErrorPage";

describe("404 component", () => {
  it("should render ErrorPage component correctly", () => {
    render(<ErrorPage />);
    const titleE1 = screen.getByText(/Page Not Found/);
    expect(titleE1).toBeInTheDocument();
  });
});