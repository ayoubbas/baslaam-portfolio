import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Bars from "../assets/icons/Bars";
import Close from "../assets/icons/Close";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

// handle open navbar in small screen function
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar`}>
      {
        !isOpen ? (
          <Bars setIsOpen={handleOpen} />
        ) : (
          <Close setIsOpen={handleOpen} />
        )
      }

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
