import { Skillcard } from "../global/skill_card"
import python from "../assets/images/icons/python.png"
import javascript from "../assets/images/icons/javascript.png"
import sql from "../assets/images/icons/sql.png"
import mysql from "../assets/images/icons/mysql.png"
import oracle from "../assets/images/icons/oracle.png"
import html from "../assets/images/icons/html.png"

export const Skills = () => {
    return (
        <div className="skills-container">
            <div className="skill-title">
                <h1 className="skill-main-title all-title">My Skill</h1>
            </div>
            <div className="skill-brief">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard dummy text ever since the 1500s..
            </div>
            <div className="skill-list">
                <Skillcard 
                    logo = {python}
                    logo_alt = "python logo"
                    rate = "85%"
                    skill_name = "Python"
                />

                <Skillcard 
                    logo = {javascript}
                    logo_alt = "javascript logo"
                    rate = "87%"
                    skill_name = "Javascript"
                />

                <Skillcard 
                    logo = {sql}
                    logo_alt = "SQL logo"
                    rate = "68%"
                    skill_name = "SQL"
                />

                <Skillcard 
                    logo = {mysql}
                    logo_alt = "MySQL logo"
                    rate = "70%"
                    skill_name = "MySQL"
                />

                <Skillcard 
                    logo = {oracle}
                    logo_alt = "Oracle logo"
                    rate = "50%"
                    skill_name = "Oracle Apex"
                />

                <Skillcard 
                    logo = {html}
                    logo_alt = "HTML logo"
                    rate = "90%"
                    skill_name = "HTML"
                />

                {/* yet to change icons and names */}
                <Skillcard 
                    logo = {python}
                    logo_alt = "python logo"
                    rate = "85%"
                    skill_name = "Python"
                />

                <Skillcard 
                    logo = {javascript}
                    logo_alt = "javascript logo"
                    rate = "87%"
                    skill_name = "Javascript"
                />

                <Skillcard 
                    logo = {sql}
                    logo_alt = "SQL logo"
                    rate = "68%"
                    skill_name = "SQL"
                />

                <Skillcard 
                    logo = {mysql}
                    logo_alt = "MySQL logo"
                    rate = "70%"
                    skill_name = "MySQL"
                />

                <Skillcard 
                    logo = {oracle}
                    logo_alt = "Oracle logo"
                    rate = "50%"
                    skill_name = "Oracle Apex"
                />

                <Skillcard 
                    logo = {html}
                    logo_alt = "HTML logo"
                    rate = "90%"
                    skill_name = "HTML"
                />
            </div>
        </div>
    )
}