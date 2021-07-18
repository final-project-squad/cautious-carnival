/* to register users*/
import { useState } from "react";
import React from "react";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

// const Register = ({setShowPop},{setUser}) => {
const Register = (props) => {
  const [name, setname] = useState();
  const [password, setPassword] = useState();
  const [email, setemail] = useState();

  // const [user, setResult] = useState([]);

  const fetchLogin = async (name, email, password) => {
    const response = await fetch("http://localhost:5000/user", {
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
  };

  const getLogin = (e) => {
    e.preventDefault();
    fetchLogin(name, email, password);
  };

  const register = (e) => {
    alert(" this needs to opena new pop up to get details")
    console.log("register");
  };

  return (
    <div className="form-login">
      <form onSubmit={getLogin}>
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
        <label>email</label>
        <input
          required
          onChange={(e) => setemail(e.target.value)}
          value={email}
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

export default Register;
