import React from 'react';
// import Logo from './headerImage.png';
import { BrowserRouter as Router, Link } from "react-router-dom"
// import { Button, Modal } from 'react-bootstrap';

import "./header.css"
import PopUpRegister from '../Login/register';


const Header = () => {
    return (
        <div className={"header"}>
            <div className={"menu"}>
                {/* <img className={"header-logo"} src={Logo} alt="website logo" /> */}
                <div className={"navbar"}>

                    <div className="nabvar-links">
                        <Router>
                        
                            <Link className="link nabvar-item" to="/register">
                                <PopUpRegister />
                            </Link>

                            <Link className="link nabvar-item" to="/login">
                                Log In
                            </Link>

                            <Link className="link nabvar-item" to="/plantsearch">
                                Plant Search
                            </Link>

                            <Link className="link nabvar-item" to="/add">
                                Add a Plant
                            </Link>
                    
                        </Router>
                    </div>
                </div>
            </div>
            <p className="sub-header">Gardenless Greenery for the Concrete Jungle</p>
        </div>
    )
}

export default Header;