import React, { useState } from 'react';

// import Logo from './headerImage.png';
import { BrowserRouter as Router, Link } from "react-router-dom"
// import { Button, Modal } from 'react-bootstrap';


import "./header.css"
import Register from '../Login/register';
import addPlant from '../Plants/addPlant';

const Header = () => {
    const [showPop, setShowPop] = useState(false);

    const navigateTo = () => {
        setShowPop(true);
    }

    const renderPop = () => {
        return <Register setShowPop={setShowPop}/>
    }

    const renderMain = () => {
        return <div></div>
    }

    return (<div>
        {/* <addPlant /> */}
        <div className={"header"}>
            <div className={"menu"}>
                <div className={"navbar"}>
                    <div className="nabvar-links">
                        <Router>
                        
                            <button className="link navbar-item" onClick={() => navigateTo()}>Log In</button>

                            <Link className="link nabvar-item" to="/about">
                                About
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
            {showPop ? renderPop() : renderMain()}
            </div>
    )
}

export default Header;