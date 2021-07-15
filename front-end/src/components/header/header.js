import React, { useState } from 'react';

// import Logo from './headerImage.png';
import { BrowserRouter as Router, Link } from "react-router-dom"
// import { Button, Modal } from 'react-bootstrap';


import "./header.css"
import Register from '../Login/register';
import AddPlant from '../Plants/addPlant';
import About from '../about/About';
import { Divider } from '@material-ui/core';
/* import AddPlant from '../Plants/addPlant'; */

const Header = () => {
    const [showPop, setShowPop] = useState(false);
    const [page, setPage] = useState(); 
    const addPlant = "add";
    const aboutPage = "about";

    const navigatePop = () => {
        setShowPop(true);
    }

    const navigatePage = (nextPage) => {
        setPage(nextPage)
    }

    const renderPop = () => {
        return <Register setShowPop={setShowPop}/>
    }

    const renderMain = () => {
        return <div></div>
    }

    const renderAddPlant = () => {
        return <AddPlant />
    }

    const renderAbout = () => {
        return <About />
    }

    return (<div>
        <div className={"header"}>
            <div className={"menu"}>
                <div className={"navbar"}>
                    <div className="nabvar-links">
                        <Router>
                        

                            <div className="link nabvar-item" onClick={() => navigatePage(aboutPage)}>
                                About
                            </div>

                            <div className="link nabvar-item">
                                Plant Search
                            </div>

                            <div className="link nabvar-item" onClick={() => navigatePage(addPlant)}>
                                Add a Plant
                            </div>
                                                </Link>

                            <div className="link nabvar-item" onClick={() => navigatePop()}>
                                Log In
                            </div>
                        </Router>
                    </div>
                </div>
            </div>
            <p className="sub-header">Gardenless Greenery for the Concrete Jungle</p>
            </div>
            {showPop ? renderPop() : renderMain()}
            {page === addPlant && renderAddPlant()}
            {page === aboutPage && renderAbout()}
            </div>
    )
}

export default Header;