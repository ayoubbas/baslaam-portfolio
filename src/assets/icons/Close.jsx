import React from "react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Close = ({setIsOpen}) => {
  return <FontAwesomeIcon  onClick={setIsOpen}  icon={faXmark}  className="close-navbar" />;
};

export default Close;
