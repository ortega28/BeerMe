import React from "react"
import { Link } from "react-router-dom";

function Nav() {
    return (
        <header>
            <Link to="/Home">
                Home
            </Link>
        </header>
    )
}

export default Nav