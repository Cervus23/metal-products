import React from "react";
import CompanyCard from "../../components/CompanyCard";
import { CompanyImg1, CompanyImg2 } from '../../img/desctop/index'
import { CompanyImg1m, CompanyImg2m } from '../../img/mobile/index'
import "./style.css";

const cardsDesc = [
  {
    id: CompanyImg1,
    textSide: "left",
    title: "Почему мы?",
    text:
      "Люди – профессионалы с большим опытом работы. Полный спектр работ по металлообработке в одном месте – комплексный индивидуальный подход. Конструкторский отдел. Логистика. Многолетний опыт машиностроения – создание промышленного ",
  },
  {
    id: CompanyImg2,
    textSide: "right",
    title: "Наши преимущества",
    text:
      "Люди – профессионалы с большим опытом работы. Полный спектр работ по металлообработке в одном месте – комплексный индивидуальный подход. Конструкторский отдел. Логистика. Многолетний опыт машиностроения – создание промышленного ",
  },
];

const cardsMob = [
  {
    id: CompanyImg1m,
    textSide: "left",
    title: "Почему мы?",
    text:
      "Люди – профессионалы с большим опытом работы. Полный спектр работ по металлообработке в одном месте – комплексный индивидуальный подход. Конструкторский отдел. Логистика. Многолетний опыт машиностроения – создание промышленного ",
  },
  {
    id: CompanyImg2m,
    textSide: "right",
    title: "Наши преимущества",
    text:
      "Люди – профессионалы с большим опытом работы. Полный спектр работ по металлообработке в одном месте – комплексный индивидуальный подход. Конструкторский отдел. Логистика. Многолетний опыт машиностроения – создание промышленного ",
  },
];

const CompanySection = () => {
  const width = window.innerWidth
  return (
    <div className="comp-section">
      <h2 className="comp-title">Наша компания</h2>
      <hr className="comp-horizontal-line" />
      <div className="company-container">
        { width <= 360 ?
            cardsMob.map((card) => (
            <CompanyCard
              url={card.id}
              textSide={card.textSide}
              title={card.title}
              text={card.text}
              key={card.id}
            />
          ))
          : cardsDesc.map((card) => (
            <CompanyCard
              url={card.id}
              textSide={card.textSide}
              title={card.title}
              text={card.text}
              key={card.id}
            />
          ))
        }
      </div>
    </div>
  );
};

export default CompanySection;
