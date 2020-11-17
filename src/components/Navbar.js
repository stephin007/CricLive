import React from 'react'
import {Link} from "react-router-dom" 

const Navbar = (props) => {
    return (
        <div className="navbar bg-primary">
            <h1>
                <i className="fa fa-hashtag"/>
                <Link to="/">CricLive</Link>
            </h1>
            <ul>
                <li>
                <Link to="/about">About</Link>
                </li>
                <li>
                <a href="https://github.com/stephin007/CricLive" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
                </li>
            </ul>
        </div>
    )
}

export default Navbar
