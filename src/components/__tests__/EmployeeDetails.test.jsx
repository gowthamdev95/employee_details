import { render, screen, waitFor, fireEvent, act } from "@testing-library/react";
import { BrowserRouter, useNavigate } from "react-router-dom";
import EmployeeDetails from "../EmployeeDetails";
// import EmployeeDetails from "../EmployeeDetails";

// jest.mock("../utils/HOC", () => (Component) => Component);

describe("EmployeeDetails component", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("renders the add employee button", () => {
    render(
      <BrowserRouter>
        <EmployeeDetails />
      </BrowserRouter>
    );
    const addButton = screen.getByRole("button", { name: /add employee/i });
    expect(addButton).toBeInTheDocument();
  });

  it("displays employee data in a table", async () => {
    const mockData = [
      {
        id: "1",
        firstName: "John",
        middleName: "Doe",
        lastName: "Smith",
        email: "john.doe@example.com",
        gender: "male",
        emergencyContact: "Jane Doe",
        contactNo: "1234567890",
        hobbies: "Reading",
        pan: "ABCDE1234F",
        address: "123 Main Street",
        dob: "01/01/1990",
      },
    ];
    jest.spyOn(global, "fetch").mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockData),
      })
    );
    render(
      <BrowserRouter>
        <EmployeeDetails />
      </BrowserRouter>
    );
    await waitFor(() => {
      expect(screen.getByText("John")).toBeInTheDocument();
      expect(screen.getByText("Doe")).toBeInTheDocument();
      expect(screen.getByText("Smith")).toBeInTheDocument();
      expect(screen.getByText("john.doe@example.com")).toBeInTheDocument();
      expect(screen.getByText("male")).toBeInTheDocument();
      expect(screen.getByText("Jane Doe")).toBeInTheDocument();
      expect(screen.getByText("1234567890")).toBeInTheDocument();
      expect(screen.getByText("Reading")).toBeInTheDocument();
      expect(screen.getByText("ABCDE1234F")).toBeInTheDocument();
      expect(screen.getByText("123 Main Street")).toBeInTheDocument();
      expect(screen.getByText("01/01/1990")).toBeInTheDocument();
    });
  });

  it("deletes employee data when the delete button is clicked", async () => {
    const mockData = [
      {
        id: "1",
        firstName: "John",
        middleName: "Doe",
        lastName: "Smith",
        email: "john.doe@example.com",
        gender: "male",
        emergencyContact: "Jane Doe",
        contactNo: "1234567890",
        hobbies: "Reading",
        pan: "ABCDE1234F",
        address: "123 Main Street",
        dob: "01/01/1990",
      },
    ];
    jest.spyOn(global, "fetch").mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockData),
      })
    );
    jest.spyOn(global, "fetch").mockImplementationOnce(() =>
      Promise.resolve({
        status: 200,
        json: () => Promise.resolve(),
      })
    );
    render(
      <BrowserRouter>
        <EmployeeDetails />
      </BrowserRouter>
    );
    await waitFor(() => {
      expect(screen.getByText("John")).toBeInTheDocument();
      const deleteButton = screen.getByRole("button", { name: /delete/i });
      fireEvent.click(deleteButton);
    });
    expect(global.fetch).toHaveBeenCalledTimes(1);
  }) 

  jest.mock("react-router-dom", () => ({
    useNavigate: jest.fn(),
  }));
  
  test("navigates to Add Employee page when Add Employee button is clicked", () => {
    // Arrange
    const navigateMock = jest.fn();
    useNavigate.mockReturnValue(navigateMock);
  
    // Act
    render(<EmployeeDetails />);
    act(() => {
      const addEmployeeButton = screen.getByRole("button", {
        name: /add employee/i,
      });
      addEmployeeButton.click();
    });
  
    // Assert
    expect(useNavigate).toHaveBeenCalled();
    expect(navigateMock).toHaveBeenCalledWith("/add");
  });
})
