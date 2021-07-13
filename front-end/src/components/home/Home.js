import React from "react"
import {Link} from "react-router-dom"
import "./Home.css"

function Home() {

    return (

        <div className="bg-img">

            <div className="animated-titles">

                <div className="title-top">
                    <div>
                        <span>ePlanta</span>
                        <span>Meet your new best bud</span>
                    </div>
                </div>

                <div className="title-bottom">
                    <div>
                        <Link className="link" to="/">
                            Enter
                        </Link>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Home
