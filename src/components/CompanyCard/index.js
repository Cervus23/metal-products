import React from "react";
import "./style.css";

const CompanyCard = (props) => {
  return (
    <div
      className={`comp-card-container ${props.textSide}`}
      style={{ backgroundImage: `url(${props.url})` }}
    >
      <div className={`comp-content-container ${props.textSide}`}>
        {props.textSide === "right" ? (
          <div className={`comp-vertical-line ${props.textSide}`}></div>
        ) : null}
        <div className={`comp-text-container ${props.textSide}`}>
          <h3 className={`comp-card-title ${props.textSide}`}>{props.title}</h3>
          <p className={`comp-card-text ${props.textSide}`}>{props.text}</p>
        </div>
        {props.textSide === "left" ? (
          <div className="comp-vertical-line"></div>
        ) : null}
      </div>
    </div>
  );
};

export default CompanyCard;
