import React from "react";
import  { ScrollRotate } from 'react-scroll-rotate';
import ServiceCard from "../../components/ServiceCard";
import first from "../../img/serviceCards/first.png";
import second from "../../img/serviceCards/second.png";
import third from "../../img/serviceCards/third.png";
import fourth from "../../img/serviceCards/fourth.png";
import fifth from "../../img/serviceCards/fifth.png";
import sixth from "../../img/serviceCards/sixth.png";
import seventh from "../../img/serviceCards/seventh.png";
import eighth from "../../img/serviceCards/eighth.png";
import big from '../../img/gears/big.svg'
import medium from '../../img/gears/medium.svg'
import small from '../../img/gears/small.svg'
import "./style.css";

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
  const width = window.innerWidth
  return (
    <div className="service-section">
      <h2 className="service-title">Услуги</h2>
      <hr className="horizontal-line" />
      <div className="gears">
        <div className="gears-left">
          <div className="gears-m-s">
            <div className="gear-medium-container g-left">
              <ScrollRotate method={"perc"}>
                <img className={`gear-mediun`} src={medium} alt="" />
              </ScrollRotate>
            </div>
            <div className="gear-small-container">
              <ScrollRotate method={"perc"}>
                <img className="gear-small g-left" src={small} alt=""/>
              </ScrollRotate>
            </div>
          </div>
          <div className="gear-big-container g-left">
            <ScrollRotate method={"perc"} from={0} to={-360}>
              <img className="gear-big " src={big} alt=""/> 
            </ScrollRotate>
          </div>
        </div>

        <div className="gears-right">
          <div className="gears-b-s">
            <div className="gear-big-container g-right">
              <ScrollRotate method={"perc"}>
                <img className="gear-big " src={big} alt=""/> 
              </ScrollRotate>
            </div>
            <div className="gear-small-container g-right">
              <ScrollRotate method={"perc"} from={0} to={-360}>
                <img className="gear-small" src={small} alt=""/>
              </ScrollRotate>
            </div>
          </div>
            <div className="gear-medium-container g-right">
              <ScrollRotate method={"perc"} from={0} to={-360}>
                <img className="gear-mediun" src={medium} alt=""/>
              </ScrollRotate>
            </div>
        </div>
      </div>
      
      <div className="services-container">
        {cards.map((card) => (
        <ServiceCard url={card.id} text={card.text} key={card.id} />
        ))}
      </div>
      <button className="btn-calculation">
        { width <= 360 ? "Расчет стоимости" :
          "Быстрый расчет цены по чертежу"
        }
      </button>
    </div>
  );
};

export default ServiceSection;