import React from "react";
import "./style.css";

const sliders = [1, 2, 3, 4];

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="slogan-container">
        <h1 className="slogan-text">Высокоточное изготовление</h1>
        <hr className="slogan-line" />
        <h1 className="slogan-text">изделий из металла по чертежам</h1>
      </div>
      <div className="slider-container">
        {sliders.map((key) => (
          <div
            className={`slider-item ${key === 1 ? "active" : ""}`}
            key={key}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
