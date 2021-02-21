import React from "react";
import arrow from "../../img/Arrow.svg";
import "./style.css";

const menuSections = ["Главная", "Услуги", "Наши работы", "О нас", "Контакты"];

const Menu = () => {
  return (
    <div className="menu-container">
      <div className="mob-menu">
        <div className="burgerline"></div>
        <div className="burgerline"></div>
        <div className="burgerline"></div>
      </div>
      <ul className="menu-sections">
        {menuSections.map((section, key) =>
          section === "Услуги" ? (
            <li className="menu-section" key={key}>
              <div className="services-menu">
              <a href="#" className="menu-link">{section}</a> 
                <img className="arrow" src={arrow} alt="arrow" />
              </div>
            </li>
          ) : (
              <li className="menu-section" key={key}>
                <a href="#" className="menu-link">{section}</a> 
                {section === "Главная" ? <hr className="underline" /> : null}
              </li>
          )
        )}
      </ul>
    </div>
  );
};

export default Menu;


