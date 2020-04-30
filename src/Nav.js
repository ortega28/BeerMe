import React from "react"
import { Link } from "react-router-dom";

import './Nav.css'

function Nav() {
    return (
        <header className="nav-header">
            <Link to="/Home" className="nav-home">
                Home
            </Link>
        </header>
    )
}

export default Nav