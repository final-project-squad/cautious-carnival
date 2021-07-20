import React, { useEffect, useState } from "react";
import getUser from "../../utils";
// import Logo from './headerImage.png';
import { BrowserRouter as Router } from "react-router-dom";
// import { Button, Modal } from 'react-bootstrap';
import "./header.css";
import Login from "../Login/login";
import Register from "../Login/register";
import AddPlant from "../Plants/addPlant";
import About from "../about/About";
import FetchPlants from "../Plants/PlantSearch";
import UserPlants from "../Plants/UserPlants";
// import Logout from "../Login/logout";
/* import AddPlant from '../Plants/addPlant'; */

const Header = () => {
  const [user, setUser] = useState("");
  const [showPop, setShowPop] = useState(false);
  const [showPopReg, setShowPopReg] = useState(false);
  const [page, setPage] = useState();
  const userPlant = "userSearch";
  const addPlant = "add";
  const aboutPage = "about";
  const plantSearch = "search";
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();

  //run function get user on load
  useEffect(() => {
    getUser(setUser);
  }, []);

  const navigatePop = () => {
    setShowPop(true);
  };

  const logout = () => {
    if (window.confirm("Are you sure you want to log out?") === true) {
      localStorage.removeItem("MyToken");
      setUser();
    } else {
    }
  };

  const loginLogout = () => {
    if (user) {
      return (
        <div>
          <div className="link nabvar-item" onClick={() => logout()}>
            Log Out <br />
          </div>
          <div className="login-greeting">
            Hello {user}!
          </div>
        </div>
      );
    } else {
      return (
        <div className="link nabvar-item" onClick={() => navigatePop()}>
          Log In / Register
        </div>
      );
    }
  };

  const showPopulate = () => {
       if (user === "Lance") {
      return (
        <div className="link nabvar-item" onClick={() => populate()}>
          populate DB <br />
        </div>
      );
    }
  };

  const populate = async () =>
  {console.log("test")
    try {
    await fetch("http://localhost:5000/populate");
  } catch (error) {    
  }  }

  const navigatePage = (nextPage) => {
    setPage(nextPage);
  };

  const renderPop = () => {
    return (
      <Login
        setUser={setUser}
        name={name}
        email={email}
        password={password}
        setName={setName}
        setEmail={setEmail}
        setPassword={setPassword}
        setShowPop={setShowPop}
        setShowPopReg={setShowPopReg}
      />
    );
  };
  const renderPopReg = () => {
    return (
      <Register
        name={name}
        email={email}
        password={password}
        setName={setName}
        setEmail={setEmail}
        setPassword={setPassword}
        setUser={setUser}
        setShowPop={setShowPop}
        setShowPopReg={setShowPopReg}
      />
    );
  };

  const renderMain = () => {
    return <div></div>;
  };

  const renderAddPlant = () => {
    return <AddPlant />;
  };

  const renderAbout = () => {
    return <About />;
  };

  const renderSearch = () => {
    return <FetchPlants />;
  };

  const renderUserPlants = () => {
    return <UserPlants user={user} />;
  };

  return (
    <div className="headerTotal">
      <div className={"header"}>
        <div className={"menu"}>
          <div className={"navbar"}>
            <div className="nabvar-links">
              <Router>
                {showPopulate()}
                <div
                  className="link nabvar-item"
                  onClick={() => navigatePage(plantSearch)}
                >
                  Plant Search
                </div>
                <div
                  className="link nabvar-item"
                  onClick={() => navigatePage(addPlant)}
                >
                  Add a Plant
                </div>
                <div
                  className="link nabvar-item"
                  onClick={() => navigatePage(aboutPage)}
                >
                  About
                </div>
                <div
                  className="link nabvar-item"
                  onClick={() => navigatePage(userPlant)}
                >
                  User Plant
                </div>
                {loginLogout()}
              </Router>
            </div>
          </div>
        </div>
        <p className="sub-header">
          Gardenless Greenery for the Concrete Jungle
        </p>
      </div>
      {showPop ? renderPop() : renderMain()}
      {showPopReg ? renderPopReg() : renderMain()}
      {/* {page === userPlantsSearch && renderUserPlants()} */}
      {page === addPlant && renderAddPlant()}
      {page === userPlant && renderUserPlants()}
      {page === aboutPage && renderAbout()}
      {page === plantSearch && renderSearch()}
    </div>
  );
};

export default Header;
