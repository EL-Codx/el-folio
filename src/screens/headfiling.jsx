import React from "react";
import '../assets/css/header.css'
import me from '../assets/images/personal_pictures/image.png'
import { MdEmail } from "react-icons/md";
import { IoLogoLinkedin } from "react-icons/io";
import { FaWhatsappSquare } from "react-icons/fa";

export const Headliner = () => {
    return (
        <div className="liner-container">
            <div className="left-liner">
                <h1 className="marginary"><span className="intro">Hi, I am</span> <span>Emmanuel Laryea</span></h1>
                <h2 className="marginary"><span>Software & </span><span>Web Developer</span></h2>
                <p className="marginary about">I specialize in creating innovative, user-friendly, and modern digital solutions, including clean, high-performing websites that elevate your business. Transforming ideas into functional and visually stunning digital experiences designed to deliver results. Are you looking for a developer to bring your vision to life? <br /> Let’s build something extraordinary together!</p>
                <div className="details-btn">
                    <button className="btn-more">
                        Read more...
                    </button>
                    <button className="btn-download">
                        Download CV
                    </button>
                </div>
            </div>

            <div className="right-liner">
                <div className="imagery">
                    <img src={me} alt="personal picture" />
                </div>
            </div>
        </div>
    )
}