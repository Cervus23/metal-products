import React from "react";
import "./style.css";

const CompanyCard = (props) => {
  return (
    <div
      className="comp-card-container"
      style={{ backgroundImage: `url(${props.url})` }}
    >
      <div className="comp-content-container">
        <div className="comp-text-container">
          <h3 className="comp-card-title">{props.title}</h3>
          <p className="comp-card-text">{props.text}</p>
        </div>

        <div className="comp-vertical-line"></div>
      </div>
    </div>
  );
};

export default CompanyCard;
