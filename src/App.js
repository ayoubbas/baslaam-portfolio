import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import "./styles/main.scss";
import Home from "./components/Home";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
import Bars from "./assets/icons/Bars";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCoffee } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="header__container">
          <h1 className="header__logo">hello</h1>
          <nav className="navbar">
            <ul className="navbar__list">
              <li className="navbar__item">
                <Link className="navbar__link" to="/">
                  Home
                </Link>
              </li>
              <li className="navbar__item">
                <Link className="navbar__link" to="/services">
                  Services
                </Link>
              </li>
              <li className="navbar__item">
                <Link className="navbar__link" to="/portfolio">
                  portfolio
                </Link>
              </li>
              <li className="navbar__item">
                <Link className="navbar__link" to="/Blog">
                  Blog
                </Link>
              </li>
              <li className="navbar__item">
                <Link className="navbar__link" to="/contact">
                  contact
                </Link>
              </li>
            </ul>
          </nav>
          <FontAwesomeIcon icon={faBars} className="menu-bar" />
        </div>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
