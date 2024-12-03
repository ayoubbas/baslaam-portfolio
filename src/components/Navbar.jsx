import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Bars from "../assets/icons/Bars";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);

  const handleOpen = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
    
  };
  return (
    <nav className={`navbar`}>
      <Bars setIsOpen={handleOpen} />

      <ul className={`navbar__list ${isOpen ? "open" : "close"}`}>
        <li className="navbar__item">
          <Link
            className={`navbar__link ${
              location.pathname === "/" ? "active-link" : ""
            }`}
            to="/"
          >
            Home
          </Link>
        </li>
        <li className="navbar__item">
          <Link
            className={`navbar__link ${
              location.pathname === "/services" ? "active-link" : ""
            }`}
            to="/services"
          >
            Services
          </Link>
        </li>
        <li className="navbar__item">
          <Link
            className={`navbar__link ${
              location.pathname === "/portfolio" ? "active-link" : ""
            }`}
            to="/portfolio"
          >
            portfolio
          </Link>
        </li>
        <li className="navbar__item">
          <Link
            className={`navbar__link ${
              location.pathname === "/Blog" ? "active-link" : ""
            }`}
            to="/Blog"
          >
            Blog
          </Link>
        </li>
        <li className="navbar__item">
          <Link
            className={`navbar__link ${
              location.pathname === "/contact" ? "active-link" : ""
            }`}
            to="/contact"
          >
            contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
