import { FaJenkins, FaPython, FaReact } from "react-icons/fa"
import { FaSquareJs } from "react-icons/fa6"
import { PiFileSqlFill } from "react-icons/pi"
import { SiDocker, SiMysql } from "react-icons/si"
import { TbBrandDjango } from "react-icons/tb"

export const Skills = () => {
    return (
        <div className="skills-container">
            <div className="skill-title">
                <h1 className="skill-main-title all-title">My Skill</h1>
            </div>
            <div className="skill-list">
                <FaPython className="skill-logo"/>
                <FaSquareJs className="skill-logo"/>
                <FaReact className="skill-logo"/>
                <TbBrandDjango className="skill-logo"/>
                <PiFileSqlFill className="skill-logo"/>
                <SiMysql className="skill-logo"/>
                <SiDocker className="skill-logo"/>
                <FaJenkins className="skill-logo"/>
            </div>
                      
        </div>
    )
}