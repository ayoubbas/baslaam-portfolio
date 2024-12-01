import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./styles/main.scss";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1 className="logo">hello</h1>

        <nav className="navbar">
          <ul className="navbar__list">
            <li className="navbar__item">
              <a className="navbar__link" href="/">
                Home
              </a>
            </li>
            <li className="navbar__item">
              <a className="navbar__link" href="/services">
                services
              </a>
            </li>
            <li className="navbar__item">
              <a className="navbar__link" href="/resume">
                resume
              </a>
            </li>
            <li className="navbar__item">
              <a className="navbar__link" href="/portfolio">
                portfolio
              </a>
            </li>
            <li className="navbar__item">
              <a className="navbar__link" href="/contact">
                contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
