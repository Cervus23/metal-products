import React from "react";
import ServiceCard from "../../components/ServiceCard";
import first from "../../img/serviceCards/first.png";
import second from "../../img/serviceCards/second.png";
import third from "../../img/serviceCards/third.png";
import fourth from "../../img/serviceCards/fourth.png";
import fifth from "../../img/serviceCards/fifth.png";
import sixth from "../../img/serviceCards/sixth.png";
import seventh from "../../img/serviceCards/seventh.png";
import eighth from "../../img/serviceCards/eighth.png";
import "./style.css";

// const cards = [first, second, third, fourth, fifth, sixth];
const cards = [
  { id: first, text: "Производство оборудования" },
  { id: second, text: "Металлическая мебель" },
  { id: third, text: "Металлоконструкции" },
  { id: fourth, text: "Металлообработка" },
  { id: fifth, text: "Раскрой металла" },
  { id: sixth, text: "Конструкторское бюро" },
  { id: seventh, text: "Аренда техники" },
  { id: eighth, text: "Ремонт техники" },
];

const ServiceSection = () => {
  return (
    <div className="service-section">
      <h2 className="service-title">Услуги</h2>
      <hr className="horizontal-line" />
      <div className="services-container">
        {cards.map((card) => (
          <ServiceCard url={card.id} text={card.text} key={card.id} />
        ))}
      </div>
      <button className="btn-calculation">
        Быстрый расчет цены по чертежу
      </button>
    </div>
  );
};

export default ServiceSection;
