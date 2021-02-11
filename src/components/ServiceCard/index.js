import React from "react";
import "./style.css";

const ServiceCard = (props) => {
  return (
    <div
      className="serv-card-container"
      style={{ backgroundImage: `url(${props.url})` }}
    >
      <div className="serv-text-container">
        <h3 className="serv-card-title">{props.text}</h3>
        <div className="serv-vertical-line"></div>
      </div>
    </div>
  );
};

export default ServiceCard;
