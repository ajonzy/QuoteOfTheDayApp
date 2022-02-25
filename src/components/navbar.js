import React from "react"
import { NavLink } from "react-router-dom"

export default function Navbar(props) {
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
        </div>
    )
}