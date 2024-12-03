import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Bars = ({ setIsOpen }) => {
  return (
    <FontAwesomeIcon onClick={setIsOpen} icon={faBars} className="menu-bar" />
  );
};

export default Bars;
