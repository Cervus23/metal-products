import React from "react";
import arrow from "../../img/Arrow.svg";
import "./style.css";

const menuSections = ["Главная", "Услуги", "Наши работы", "О нас", "Контакты"];

const Menu = () => {
  return (
    <div className="menu-container">
      <ul className="menu-sections">
        {menuSections.map((section) =>
          section === "Услуги" ? (
            <li className="menu-section">
              <div className="services">
                {section}
                <img className="arrow" src={arrow} alt="arrow" />
              </div>
            </li>
          ) : (
            <li className="menu-section">{section}</li>
          )
        )}
      </ul>
    </div>
  );
};

export default Menu;

{
  /* <li className="menu-item">Главная</li>
        <li className="menu-item">
          Услуги
          <img src={arrow} alt="arrow" />
        </li>
        <li className="menu-item">Наши работы</li>
        <li className="menu-item">О нас</li>
        <li className="menu-item">Контакты</li> */
}
