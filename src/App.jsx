import React from "react"
import { Topnav } from "./global/topnav"
import { Headliner } from "./screens/headfiling"
import { Details } from "./screens/details"
import { Skills } from "./screens/skills"
import { Contactform } from "./screens/form"
import { Media } from "./screens/medias"
import personal_logo from "../public/logo/footer_icon.png"

function App() {

  return (
    <>
      <div className="main-container">
        <header className="header-container">
          <Topnav />
          <Headliner />
        </header>
        <div className="content">
          <Details />
          <Skills />
          <Contactform />
        </div>
        <footer>
          <div>
            <Media />
            <p>© Emmanuel Laryea 2025</p>
          </div>
          <div>
            <img src={personal_logo} alt="personal logo" className="personal_footer_logo" />
          </div>
        </footer>
      </div>
    </>
  )
}

export default App
