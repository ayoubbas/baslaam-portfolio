import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  console.log(location);
  
  return (
    <nav className="navbar">
      <ul className="navbar__list">
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
