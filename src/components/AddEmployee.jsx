import { push, ref, set, update } from "firebase/database";
import { useState } from "react";
import { dataRef, db } from "../utils/firebase-config";
import { useNavigate, useLocation } from "react-router-dom";
import EnhancedComponent from "../utils/HOC";

const AddEmployee = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [details, setDetails] = useState({
    firstName: location.state ? location.state.firstName : "",
    middleName: location.state ? location.state.middleName : "",
    lastName: location.state ? location.state.lastName : "",
    gender: location.state ? location.state.gender : "",
    contactNo: location.state ? location.state.contactNo : "",
    emergencyContact: location.state ? location.state.emergencyContact : "",
    email: location.state ? location.state.email : "",
    pan: location.state ? location.state.pan : "",
    dob: location.state ? location.state.dob : "",
    hobbies: location.state ? location.state.hobbies : "",
    address: location.state ? location.state.address : "",
  });

  const handleSubmit = () => {
    push(dataRef, details).then((res) => console.log(res));
    navigate("/employee");
  };

  const handleUpdate = () => {
    const userRef = ref(db, `employee/${location.state.id}`);
    set(userRef, details);
    navigate("/employee");
  };
  return (
    <div data-testid='addEmployee'>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          location.state ? handleUpdate() : handleSubmit()
        }}
      >
        <div className="addEmployee">
          <label htmlFor="name" aria-labelledby='name'>First Name</label>
          <input
            type="text"
            value={details.firstName}
            data-testid='name'
            onChange={(e) =>
              setDetails({ ...details, firstName: e.target.value })
            }
          />
        </div>
        <div className="addEmployee">
          <label htmlFor="middleName" aria-labelledby='middleName'>Middle Name</label>
          <input
            type="text"
            value={details.middleName}
            data-testid='middle-name'
            onChange={(e) =>
              setDetails({ ...details, middleName: e.target.value })
            }
          />
        </div>
        <div className="addEmployee">
          <label htmlFor="lastName" aria-labelledby='lastName'>Last Name</label>
          <input
            type="text"
            value={details.lastName}
            data-testid='last-name'
            onChange={(e) =>
              setDetails({ ...details, lastName: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="gender">Gender</label>
          <input
            type="radio"
            style={{ marginLeft: "150px" }}
            data-testid='male'
            value={"male"}
            onChange={(e) => setDetails({ ...details, gender: e.target.value })}
          />
          <label htmlFor="male">Male</label>
          <input
            type="radio"
            style={{ marginLeft: "30px" }}
            data-testid='female'
            value={"female"}
            onChange={(e) => setDetails({ ...details, gender: e.target.value })}
          />
          <label htmlFor="female">Female</label>
        </div>
        <div className="addEmployee">
          <label htmlFor="contact">Contact No</label>
          <input
            type="text"
            value={details.contactNo}
            data-testid='contact'
            onChange={(e) =>
              setDetails({ ...details, contactNo: e.target.value })
            }
          />
        </div>
        <div className="addEmployee">
          <label htmlFor="emergencycontact">Emergency Contact No</label>
          <input
            type="text"
            value={details.emergencyContact}
            data-testid='emergency-contact'
            onChange={(e) =>
              setDetails({ ...details, emergencyContact: e.target.value })
            }
          />
        </div>
        <div className="addEmployee">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            value={details.email}
            data-testid='email'
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
          />
        </div>
        <div className="addEmployee">
          <label htmlFor="pan">PAN Card No</label>
          <input
            type="text"
            value={details.pan}
            data-testid='pan'
            onChange={(e) => setDetails({ ...details, pan: e.target.value })}
          />
        </div>
        <div className="addEmployee">
          <label htmlFor="dob">DOB</label>
          <input
            type="date"
            value={details.dob}
            data-testid='dob'
            onChange={(e) => setDetails({ ...details, dob: e.target.value })}
          />
        </div>
        <div className="addEmployee">
          <label htmlFor="hobbies">Hobbies</label>
          <input
            type="text"
            value={details.hobbies}
            data-testid='hobbies'
            onChange={(e) =>
              setDetails({ ...details, hobbies: e.target.value })
            }
          />
        </div>
        <div className="addEmployee">
          <label htmlFor="address">Permanent Address</label>
          <input
            type="text"
            value={details.address}
            data-testid='address'
            onChange={(e) =>
              setDetails({ ...details, address: e.target.value })
            }
          />
        </div>
        <input type="submit" value={location.state ? "Update" : "Submit"} />
      </form>
    </div>
  );
};

export default EnhancedComponent(AddEmployee);
