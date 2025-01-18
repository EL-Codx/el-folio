import React from "react"
import { Topnav } from "./global/topnav"
import { Headliner } from "./screens/headfiling"
import { Highlights } from "./screens/highligt"
import { Details } from "./screens/details"

// import any module needed here
function App() {

  return (
    <>
      <div className="main-container">
        <header className="header-container">
          <Topnav />
          <Headliner />
          <Highlights />
          <Details />
        </header>
        <div className="content">
          body
        </div>
        <footer className="footer">
          footer
        </footer>
      </div>
    </>
  )
}

export default App
