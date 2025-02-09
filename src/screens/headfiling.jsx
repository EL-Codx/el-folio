import React from "react";
import '../assets/css/header.css'
import me from '../assets/images/personal_pictures/image.jpg'

export const Headliner = () => {
    return (
        <div className="liner-container">
            <div className="left-liner">
                <h1 className="marginary"><span className="intro">Hi, I am</span> <span>Emmanuel Laryea</span></h1>
                <h2 className="marginary diff"><span>Software & </span><span>Web Developer</span></h2>
                <p className="marginary about">Based in Accra, I'm dedicated to creating clean, modern websites and digital solutions that are both user-friendly and innovative. Transforming ideas into functional, visually stunning experiences that deliver results is what I do best. Let's bring your vision to reality!</p>
                <div className="details-btn">
                    {/* <button className="btn-more">
                        Read more...
                    </button> */}
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