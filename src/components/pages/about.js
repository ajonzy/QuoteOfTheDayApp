import React from "react"

import Navbar from "../navbar"
import Footer from "../footer"

export default function About(props) {
    return (
        <div className="page-wrapper">
            <Navbar />

            <div className="content-wrapper">
                <h2>About</h2>
                <p>This app provides a new quote every day for your inspiration. So come back each day to find out what the new quote is!</p>
            </div>

            <Footer />
        </div>
    )
}