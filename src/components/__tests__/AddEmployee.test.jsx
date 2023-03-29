import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import AddEmployee from "../AddEmployee";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";


const mockedUsedNavigate = jest.fn();
const mockedUsedLocation = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
  useLocation: () => mockedUsedLocation,
}));

test("all input fields are present", () => {
  render(
    <MemoryRouter initialEntries={["/add"]}>
      <AddEmployee />
    </MemoryRouter>
  );

  const inputEl = screen.getByTestId("name");
  expect(inputEl).toBeInTheDocument();
  expect(inputEl).toHaveAttribute("type", "text");
  userEvent.type(inputEl, "Gowtham");
  expect(screen.getByTestId("name")).toHaveValue("Gowtham");

  const inputE2 = screen.getByTestId("middle-name");
  expect(inputE2).toBeInTheDocument();
  expect(inputE2).toHaveAttribute("type", "text");
  userEvent.type(inputE2, "raj");
  expect(screen.getByTestId("middle-name")).toHaveValue("raj");

  const inputE3 = screen.getByTestId("last-name");
  expect(inputE3).toBeInTheDocument();
  expect(inputE3).toHaveAttribute("type", "text");
  userEvent.type(inputE3, "V");
  expect(screen.getByTestId("last-name")).toHaveValue("V");

  const inputE4 = screen.getByTestId("male");
  expect(inputE4).toBeInTheDocument();
  expect(inputE4).toHaveAttribute("type", "radio");

  const inputE5 = screen.getByTestId("female");
  expect(inputE5).toBeInTheDocument();
  expect(inputE5).toHaveAttribute("type", "radio");

  const inputE6 = screen.getByTestId("contact");
  expect(inputE6).toBeInTheDocument();
  expect(inputE6).toHaveAttribute("type", "text");
  userEvent.type(inputE6, "1234567890");
  expect(screen.getByTestId("contact")).toHaveValue("1234567890");

  const inputE7 = screen.getByTestId("emergency-contact");
  expect(inputE7).toBeInTheDocument();
  expect(inputE7).toHaveAttribute("type", "text");
  userEvent.type(inputE7, "0987654321");
  expect(screen.getByTestId("emergency-contact")).toHaveValue("0987654321");

  const inputE8 = screen.getByTestId("email");
  expect(inputE8).toBeInTheDocument();
  expect(inputE8).toHaveAttribute("type", "email");
  userEvent.type(inputE8, "sample@gmail.com");
  expect(screen.getByTestId("email")).toHaveValue("sample@gmail.com");

  const inputE9 = screen.getByTestId("pan");
  expect(inputE9).toBeInTheDocument();
  expect(inputE9).toHaveAttribute("type", "text");
  userEvent.type(inputE9, "Abcd12345");
  expect(screen.getByTestId("pan")).toHaveValue("Abcd12345");

  const inputE10 = screen.getByTestId("dob");
  expect(inputE10).toBeInTheDocument();
  expect(inputE10).toHaveAttribute("type", "date");

  const inputE11 = screen.getByTestId("hobbies");
  expect(inputE11).toBeInTheDocument();
  expect(inputE11).toHaveAttribute("type", "text");
  userEvent.type(inputE11, "Cricket");
  expect(screen.getByTestId("hobbies")).toHaveValue("Cricket");

  const inputE12 = screen.getByTestId("address");
  expect(inputE12).toBeInTheDocument();
  expect(inputE12).toHaveAttribute("type", "text");
  userEvent.type(inputE12, "Coimbatore");
  expect(screen.getByTestId("address")).toHaveValue("Coimbatore");

  const button = screen.getByRole("button");
  fireEvent.click(button);

  const aboutComponent = screen.getByTestId("addEmployee");
  expect(aboutComponent).toBeInTheDocument();
});
