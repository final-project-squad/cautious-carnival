/* to register users*/
import { useState } from "react";
import React from "react";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

// const Register = ({setShowPop},{setUser}) => {
const Login = (props) => {
  const [name, setname] = useState();
  const [password, setPassword] = useState();
  const [email, setemail] = useState();

  // const [user, setResult] = useState([]);

  const fetchLogin = async (name, email, password) => {
    const response = await fetch("http://localhost:5000/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
    });
    const data = await response.json();
    localStorage.setItem("MyToken", data.token);
    props.setUser(data.name);
    props.setShowPop(false);
    props.setShowPopReg(false)
  };

  const checkLogin = (e) => {
    alert("this needs to check the login")
    // e.preventDefault();
    // fetchLogin(name, email, password);
  };

  const register = (e) => {
    props.setShowPopReg(true);
    // props.setShowPop(false)
  };

  return (
    <div className="form-login">
      <form onSubmit={checkLogin}>
        <HighlightOffIcon
          className="close-icon"
          onClick={() => props.setShowPop(false)}
        />

        <label>name</label>
        <input
          required
          onChange={(e) => setname(e.target.value)}
          value={name}
        />
        <br />
        <label>password</label>
        <input
          required
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />

        <br />
        <button type="submit" className="btt-login">
          Login
        </button>
      </form>
      <button onClick={register} className="btt-reg">
        Register
      </button>
    </div>
  );
};

export default Login;
