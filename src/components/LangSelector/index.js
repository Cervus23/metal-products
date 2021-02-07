import React from "react";
import russianFlag from "../../img/Flag_of_Russia 1.svg";
import arrow from "../../img/Arrow.svg";
import "./style.css";

const LangSelector = () => {
  return (
    <div className="language-wrapper">
      <div className="language-container">
        <img className="flag" src={russianFlag} alt="Flag of Russia" />
        <img className="arrow" src={arrow} alt="arrow" />
      </div>
    </div>
  );
};

export default LangSelector;
