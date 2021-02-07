import React from "react";
import logo from "../../img/Logo.svg";
import "./style.css";

const Logo = () => {
  return (
    <div className="logo">
      <img src={logo} alt="logo" />
    </div>
  );
};

export default Logo;
