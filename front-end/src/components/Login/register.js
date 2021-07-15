/* to register users*/
import { useState } from "react";
import React from 'react';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

const Register = ({setShowPop}) => {
  console.log("hitting register");
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
    
    try {
      const data = await response.json();
      // setResult(data);
      localStorage.setItem("MyToken", data.token);
      alert("user Created");
    } catch (error) {
      console.log("an error ocoured in front-end login/register");
    }
  };

  const getLogin = (e) => {
    console.log("hope")
    e.preventDefault();
    fetchLogin(name, email, password);
  };

  const register = (e) => {
    console.log("register")
  };

  return (
    <div className="form-login">
    <form onSubmit={getLogin}>
          <HighlightOffIcon className="close-icon" onClick={() => setShowPop(false)}/>

          <label>name</label>
          <input onChange={(e) => setname(e.target.value)} value={name} />
          <br />
          <label>email</label>
          <input onChange={(e) => setemail(e.target.value)} value={email} />
          <br />
          <label>password</label>
          <input onChange={(e) => setPassword(e.target.value)} value={password} />
          <br />
          <button type="submit" className="btt-login">Login</button>
        </form>
        <button onClick={register} className="btt-reg">Register</button>
        </div>
  );
};

export default Register;
