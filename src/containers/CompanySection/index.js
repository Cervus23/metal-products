import React from "react";
import CompanyCard from "../../components/CompanyCard";
import first from "../../img/companyCards/first.png";
import second from "../../img/companyCards/second.png";
import "./style.css";

const cards = [
  {
    id: first,
    textSide: "left",
    title: "Почему мы?",
    text:
      "Люди – профессионалы с большим опытом работы. Полный спектр работ по металлообработке в одном месте – комплексный индивидуальный подход. Конструкторский отдел. Логистика. Многолетний опыт машиностроения – создание промышленного ",
  },
  {
    id: second,
    textSide: "right",
    title: "Наши преимущества",
    text:
      "Люди – профессионалы с большим опытом работы. Полный спектр работ по металлообработке в одном месте – комплексный индивидуальный подход. Конструкторский отдел. Логистика. Многолетний опыт машиностроения – создание промышленного ",
  },
];

const CompanySection = () => {
  return (
    <div className="comp-section">
      <h2 className="comp-title">Наша компания</h2>
      <hr className="comp-horizontal-line" />
      <div className="company-container">
        {cards.map((card) => (
          <CompanyCard
            url={card.id}
            textSide={card.textSide}
            title={card.title}
            text={card.text}
            key={card.id}
          />
        ))}
      </div>
    </div>
  );
};

export default CompanySection;
