import React from "react";
import "./style.css";

const ServiceCard = (props) => {
  return (
    <div
      className="card-container"
      style={{ backgroundImage: `url(${props.url})` }}
    >
      <div className="text-container">
        <h3 className="card-text">{props.text}</h3>
        <div className="vertical-line"></div>
      </div>
    </div>
  );
};

export default ServiceCard;
