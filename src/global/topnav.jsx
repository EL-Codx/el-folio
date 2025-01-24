import React, { useState } from "react";
import '../assets/css/header.css'
import { FaBars } from "react-icons/fa";

export const Topnav = () => {
    const [isOpen, setIsOpen] = useState(true);

    const togglemenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <nav className="nav-bar">
            <div className="left-hold">
                <h3>EL-Codx</h3>
                <a href="#" className="hub">GitHub</a>
            </div>
            <div className="right-hold">
                <div className={isOpen ? "bar active" : "bar"}>
                    <a href="#">Home</a>
                    <a href="#">Services</a>
                    <a href="#">Profile</a>
                    {/* <a href="#">Portfolio</a> */}
                    <a href="#">Contact</a>
                    <a id="hire">Hire Me!</a>
                </div>
                <div className="icon" onClick={togglemenu}>
                    <FaBars />
                </div>
            </div>
        </nav>
    )
}