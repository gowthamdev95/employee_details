import React from "react";
import { render, screen } from "@testing-library/react";
import ErrorBoundary from "../ErrorBoundary";
import ErrorPage from "../ErrorPage";

describe("ErrorBoundary component", () => {
  test("should render the ErrorPage component when an error is thrown", () => {
    const ThrowErrorComponent = () => {
      throw new Error("test error");
    };

    render(
      <ErrorBoundary>
        <ThrowErrorComponent />
      </ErrorBoundary>
    );

    const errorPageElement = screen.getByTestId("error-page");

    expect(errorPageElement).toBeInTheDocument();
  });

  test("should render the child components when no error is thrown", () => {
    const ChildComponent = () => {
      return <div data-testid="child-component">Child Component</div>;
    };

    render(
      <ErrorBoundary>
        <ChildComponent />
      </ErrorBoundary>
    );

    const childComponentElement = screen.getByTestId("child-component");

    expect(childComponentElement).toBeInTheDocument();
  });
});
