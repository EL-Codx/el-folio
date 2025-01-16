import { Topnav } from "./global/topnav"

// import any module needed here
function App() {

  return (
    <>
      <div className="main-container">
        <header className="header-container">
          <Topnav />
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
