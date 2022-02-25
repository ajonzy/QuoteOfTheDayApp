import React from "react"
import { Link } from "react-router-dom"

import Navbar from "../navbar"
import Footer from "../footer"

export default function Home(props) {
    return (
        <div className="page-wrapper">
            <Navbar />

            <div className="content-wrapper">
                <h2>Welcome to Quote of the Day!</h2>
                <p>Click the button to see today's quote</p>
                <Link to="/quote"><button>Go</button></Link>
            </div>

            <Footer />
        </div>
    )
}