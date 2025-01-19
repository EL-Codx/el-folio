import React from "react"
import { Topnav } from "./global/topnav"
import { Headliner } from "./screens/headfiling"
import { Highlights } from "./screens/highligt"
import { Details } from "./screens/details"
import { Skills } from "./screens/skills"

// import any module needed here
function App() {

  return (
    <>
      <div className="main-container">
        <header className="header-container">
          <Topnav />
          <Headliner />
        </header>
        <div className="content">
          <Highlights />
          <Details />
          <Skills />
        </div>
        <footer className="footer">
          footer
        </footer>
      </div>
    </>
  )
}

export default App
