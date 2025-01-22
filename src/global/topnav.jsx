import React from "react";
import '../assets/css/header.css'

export const Topnav = () => {
    return (
        <nav className="nav-bar">
            <div className="left-hold">
                <h3>EL-Codx</h3>
                <a href="#" className="hub">GitHub</a>
            </div>
            <div className="right-hold">
                <a href="#">Home</a>
                <a href="#">Services</a>
                <a href="#">Profile</a>
                {/* <a href="#">Portfolio</a> */}
                <a href="#">Contact</a>
                <a id="hire">Hire Me!</a>
            </div>
        </nav>
    )
}