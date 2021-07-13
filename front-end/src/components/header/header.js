import React from 'react';
// import Logo from './headerImage.png';
import { BrowserRouter as Router, Link } from "react-router-dom"

import "./header.css"
import PopUp from './Modal';


const Header = () => {
    return (
        <div className={"header"}>
            <div className={"menu"}>
                {/* <img className={"header-logo"} src={Logo} alt="website logo" /> */}
                <div className={"navbar"}>
                    <Router>
                        <Link className="link" to="/register">
                            Register <PopUp/>
                        </Link>
                        <Link className="link" to="/login">
                            Log In
                        </Link>
                        <Link className="link" to="/plantsearch">
                            Plant Search
                        </Link>
                        <Link className="link" to="/add">
                            Add a Plant
                        </Link>
                    </Router>
                </div>
            </div>
            <p>Gardenless Greenery for the Concrete Jungle</p>
        </div>
    )
}

export default Header;