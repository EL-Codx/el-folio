import { Skillcard } from "../global/skill_card"
import python from "../assets/images/icons/python.png"
import javascript from "../assets/images/icons/javascript.png"
import sql from "../assets/images/icons/sql.png"
import mysql from "../assets/images/icons/mysql.png"
import oracle from "../assets/images/icons/oracle.png"
import html from "../assets/images/icons/html.png"
import css from "../assets/images/icons/css.png"
import git from "../assets/images/icons/git.png"
import github from "../assets/images/icons/github.png"
import django from "../assets/images/icons/django.png"
import docker from "../assets/images/icons/docker.png"
import jenkins from "../assets/images/icons/jenkins.png"
import node from "../assets/images/icons/node.png"

export const Skills = () => {
    return (
        <div className="skills-container">
            <div className="skill-title">
                <h1 className="skill-main-title all-title">My Skill</h1>
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
                    logo = {django}
                    logo_alt = "django logo"
                    rate = "50%"
                    skill_name = "Django Apex"
                />

                <Skillcard 
                    logo = {html}
                    logo_alt = "HTML logo"
                    rate = "90%"
                    skill_name = "HTML"
                />

                {/* yet to change icons and names */}
                <Skillcard 
                    logo = {css}
                    logo_alt = "css logo"
                    rate = "79%"
                    skill_name = "CSS"
                />

                <Skillcard 
                    logo = {git}
                    logo_alt = "git logo"
                    rate = "87%"
                    skill_name = "Git"
                />

                <Skillcard 
                    logo = {github}
                    logo_alt = "github logo"
                    rate = "73%"
                    skill_name = "GitHub"
                />

                <Skillcard 
                    logo = {jenkins}
                    logo_alt = "jenkins logo"
                    rate = "54%"
                    skill_name = "Jenkins"
                />

                <Skillcard 
                    logo = {oracle}
                    logo_alt = "Oracle logo"
                    rate = "50%"
                    skill_name = "Oracle Apex"
                />

                <Skillcard 
                    logo = {docker}
                    logo_alt = "docker logo"
                    rate = "47%"
                    skill_name = "Docker"
                />

                <Skillcard 
                    logo = {node}
                    logo_alt = "node logo"
                    rate = "88%"
                    skill_name = "Node"
                />

                <Skillcard 
                    logo = {docker}
                    logo_alt = "Advance Excel logo"
                    rate = "93%"
                    skill_name = "Advance Excel"
                />

                <Skillcard 
                    logo = {node}
                    logo_alt = "Photoshop logo"
                    rate = "84%"
                    skill_name = "Photoshop"
                />

<               Skillcard 
                    logo = {docker}
                    logo_alt = "Illustrator logo"
                    rate = "79%"
                    skill_name = "Illustrator"
                />

                <Skillcard 
                    logo = {node}
                    logo_alt = "Microsoft Suit logo"
                    rate = "90%"
                    skill_name = "Microsoft Suit"
                />
            </div>
        </div>
    )
}