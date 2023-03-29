import { AgGridReact } from "ag-grid-react";
import { onValue, ref, remove } from "firebase/database";
import { useEffect, useState, useRef } from "react";
import { dataRef, db } from "../utils/firebase-config";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { useNavigate } from "react-router-dom";
import EnhancedComponent from "../utils/HOC";

function ButtonRenderer(props) {
  function handleClick() {
    const dbRef = ref(db, "/employee/" + props.node.data.id);
    remove(dbRef).then(() => console.log("Deleted"));
    console.log(props.node.data);
  }

  return <button onClick={handleClick}>Delete</button>;
}

function ButtonRenderer1(props) {
  const navigate = useNavigate();
  function handleClick() {
    const temp = props.data;
    navigate("/add", { state: temp });
    console.log(temp, "hello");
  }

  return <button onClick={handleClick}>Update</button>;
}

const EmployeeDetails = () => {
  const [data, setData] = useState([]);
  const gridRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    onValue(dataRef, (snapshot) => {
      const data = [];
      snapshot.forEach((childSnapshot) => {
        data.push({
          id: childSnapshot.key,
          ...childSnapshot.val(),
        });
      });
      setData(data);
    });
  }, []);

  const [columnDefs, setColumnDefs] = useState([
    { field: "firstName", filter: true, width: 150 },
    { field: "middleName", filter: true, width: 120 },
    { field: "lastName", filter: true, width: 90 },
    { field: "email", width: 200 },
    { field: "gender", width: 90 },
    { field: "emergencyContact", width: 120 },
    { field: "contactNo", width: 120 },
    { field: "hobbies", width: 120 },
    { field: "pan", width: 120 },
    { field: "address", width: 120 },
    { field: "dob", width: 120 },
    {
      field: "",
      width: 120,
      headerName: "Button",
      cellRendererFramework: ButtonRenderer,
    },
    {
      field: "",
      width: 120,
      headerName: "update",
      cellRendererFramework: ButtonRenderer1,
    },
  ]);

  console.log(data, "data");
  return (
    <div data-testid='employeeDetails'>
      <button onClick={() => navigate("/add")} name="add employee">Add Employee</button>
      <div className="ag-theme-alpine" style={{ width: 1300, height: 1200 }}>
        <AgGridReact rowData={data} ref={gridRef} columnDefs={columnDefs} />
      </div>
    </div>
  );
};

export default EnhancedComponent(EmployeeDetails);
