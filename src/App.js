import "./App.css";
import Login from "./components/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import EmployeeDetails from "./components/EmployeeDetails";
import AddEmployee from "./components/AddEmployee";
import ErrorBoundary from "./components/ErrorBoundary";
import ErrorPage from "./components/ErrorPage";

function App() {
  return (
    <div className="App">
        <ErrorBoundary>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/employee" element={<EmployeeDetails />} />
            <Route exact path="/add" element={<AddEmployee />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </ErrorBoundary>
    </div>
  );
}

export default App;
