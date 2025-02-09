import React, { useState } from "react";
import '../assets/css/header.css'
import { FaBars } from "react-icons/fa";
import logo_nav from "../../public/logo/nav_icon.png"

export const Topnav = () => {
    const [isOpen, setIsOpen] = useState(true);

    const togglemenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <nav className="nav-bar">
            <div className="left-hold">
                <img src={logo_nav} alt="personal logo" className="personal_logo"/>
                <a href="https://github.com/EL-Codx?tab=repositories" target="_blank" className="hub">GitHub</a>
            </div>
            <div className="right-hold">
                <div className={isOpen ? "bar active" : "bar"}>
                    <a href="#">Home</a>
                    <a href="#service-id">Services</a>
                    {/* <a href="#">Profile</a> */}
                    <a href="#contact-info">Contact</a>
                    <a id="hire">Hire Me!</a>
                </div>
                <div className="icon" onClick={togglemenu}>
                    <FaBars />
                </div>
            </div>
        </nav>
    )
}