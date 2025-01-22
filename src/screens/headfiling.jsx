import React from "react";
import '../assets/css/header.css'
import me from '../assets/images/personal_pictures/image.png'

export const Headliner = () => {
    return (
        <div className="liner-container">
            <div className="left-liner">
                <h3 className="marginary">Hi, I am Emmanuel Laryea</h3>
                <h1 className="marginary"><span>Software &</span><span>Web Developer</span></h1>
                <p className="marginary">Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br /> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...</p>
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