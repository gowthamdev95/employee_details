import { useState } from "react";
import { Card, Row, Col } from "react-bootstrap";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { app } from "../utils/firebase-config";
import { useNavigate } from "react-router-dom";
import logo from '../assets/logo1.png'

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = () => {
    const authentication = getAuth();
    signInWithEmailAndPassword(authentication, email, password).then((res) => {
      if (res.user.accessToken != "") {
        sessionStorage.setItem('accessToken', res.user.accessToken)
        navigate("/employee");
      }
    });
  };

  return (
    <div className="login" data-testid='login'>
      <Card
        style={{ height: "400px", backgroundColor: "white" }}
      >
        <form
          className="login__form"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <div className="logo">
            <img src={logo} height={'150px'} />
          </div>
          <div className="login__input">
            <input
              type="text"
              className="form__input"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              className="form__input"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input type="submit" className="form__btn" value={"Submit"} />
          </div>
        </form>
      </Card>
    </div>
  );
};

export default Login;
