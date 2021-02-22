import React from "react";
import ServiceCard from "../../components/ServiceCard";
import { ServiceImg1, 
         ServiceImg2, 
         ServiceImg3, 
         ServiceImg4, 
         ServiceImg5, 
         ServiceImg6, 
         ServiceImg7, 
         ServiceImg8, 
         BigGear, 
         MediumGear, 
         SmallGear 
} from '../../img/desctop/index';
import { ServiceImg1m, 
         ServiceImg2m, 
         ServiceImg3m, 
         ServiceImg4m, 
         ServiceImg5m, 
         ServiceImg6m, 
         ServiceImg7m, 
         ServiceImg8m,
} from '../../img/mobile/index';
import "./style.css";

const cardsDesc = [
  { id: ServiceImg1, text: "Производство оборудования" },
  { id: ServiceImg2, text: "Металлическая мебель" },
  { id: ServiceImg3, text: "Металлоконструкции" },
  { id: ServiceImg4, text: "Металлообработка" },
  { id: ServiceImg5, text: "Раскрой металла" },
  { id: ServiceImg6, text: "Конструкторское бюро" },
  { id: ServiceImg7, text: "Аренда техники" },
  { id: ServiceImg8, text: "Ремонт техники" },
];

const cardsMob = [
  { id: ServiceImg1m, text: "Производство оборудования" },
  { id: ServiceImg2m, text: "Металлическая мебель" },
  { id: ServiceImg3m, text: "Металлоконструкции" },
  { id: ServiceImg4m, text: "Металлообработка" },
  { id: ServiceImg5m, text: "Раскрой металла" },
  { id: ServiceImg6m, text: "Конструкторское бюро" },
  { id: ServiceImg7m, text: "Аренда техники" },
  { id: ServiceImg8m, text: "Ремонт техники" },
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
                <img className={`gear-mediun`} src={MediumGear} alt="" />
            </div>
            <div className="gear-small-container">
                <img className="gear-small g-left" src={SmallGear} alt=""/>
            </div>
          </div>
          <div className="gear-big-container g-left">
              <img className="gear-big " src={BigGear} alt=""/> 
          </div>
        </div>

        <div className="gears-right">
          <div className="gears-b-s">
            <div className="gear-big-container g-right">
                <img className="gear-big " src={BigGear} alt=""/>
            </div>
            <div className="gear-small-container g-right">
                <img className="gear-small" src={SmallGear} alt=""/>
            </div>
          </div>
            <div className="gear-medium-container g-right">
                <img className="gear-mediun" src={MediumGear} alt=""/>
            </div>
        </div>
      </div>
      
      <div className="services-container">
      { width <= 360 ? 
        cardsMob.map((card) => (
        <ServiceCard url={card.id} text={card.text} key={card.id} />
        ))
        :
        cardsDesc.map((card) => (
        <ServiceCard url={card.id} text={card.text} key={card.id} />
        ))
      }
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