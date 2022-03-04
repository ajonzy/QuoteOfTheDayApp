import React from "react"
import { NavLink } from "react-router-dom"
import Cookies from "js-cookie"

export default function Navbar(props) {
    const handleLogout = () => {
        Cookies.remove("username")
        props.handleSuccesfulLogout()
    }

    return (
        <div className="navbar-wrapper">
            <div className="logo">
                <h3>Quote of the Day</h3>
            </div>

            <div className="navlinks-wrapper">
                <NavLink exact path="/" to="/">Home</NavLink>
                <NavLink path="/quote" to="/quote">Quote</NavLink>
                <NavLink path="/about" to="/about">About</NavLink>
            </div>

            <div className="greeting">
                Hello, {props.username}
                <button onClick={handleLogout}>Logout</button>
            </div>
        </div>
    )
}