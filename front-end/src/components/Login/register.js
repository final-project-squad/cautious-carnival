/* to register users*/
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import React from 'react';

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
    e.preventDefault();
    fetchLogin(name, email, password);
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Login / Register
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={getLogin}>
          <label>name:</label>
          <input onChange={(e) => setname(e.target.value)} />
          <br />
          <label>email:</label>
          <input onChange={(e) => setemail(e.target.value)} />
          <br />
          <label>password:</label>
          <input onChange={(e) => setPassword(e.target.value)} />
          <br />
          <button type="submit">Login</button>
        </form>
        {/* <p>{result.map(result => <div>{result.object}, {result.date}</div>)}</p> */}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

function PopUpRegister() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="info" size="sm" onClick={() => setModalShow(true)}>
        Register / Login
      </Button>

      <Register
        show={modalShow}
        onHide={() => setModalShow(false)}
        // item={item}
      />
    </>
  );
}

export default PopUpRegister;
