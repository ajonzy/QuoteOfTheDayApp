import React from "react"
import { Link } from "react-router-dom"

export default function Home(props) {
    return (
        <div className="content-wrapper">
            <h2>Welcome to Quote of the Day!</h2>
            <p>Click the button to see today's quote</p>
            <Link to="/quote"><button>Go</button></Link>
        </div>
    )
}