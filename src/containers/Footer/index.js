import React from "react";
import media from "../../img/media.png";
import "./style.css";

const about = ["Наши работы", "Контакты", "Доставка", "Форма заказа"];

const servicesDesc = [
  "Производство оборудования",
  "Металлическая мебель",
  "Металлоконструкции",
  "Металлообработка",
  "Раскройка металла",
  "Конструкторское бюро",
  "Аренда техники",
  "Ремонт техники",
];

const servicesMob = [
  "Производство оборудования",
  "Арт-объекты",
  "Металлическая мебель",
  "Металлообработка",
  "Лазерная резка",
  "Металлоконструкции",
  "Аренда спецтехники",
];

const socMedia = ["facebook", "instagram", "youtube", "google"];

const Footer = () => {
  const width = window.innerWidth
  const serviceslist = (link, id) => 
  (
    <li className="service-item" key={id}>
      <a className="service-link" href="#">
        {link}
      </a>
    </li>
  )
  return (
    <div className="footer">
      <div className="info-container">
        <div className="about">
          <div className="footer-text-container">
            <h4 className="footer-title">О компании</h4>
            <ul className="about-list">
              {about.map((link, id) => (
                <li className="about-item" key={id}>
                  <a className="about-link" href="#">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-vl"></div>
        </div>
        <div className="services">
          <div className="footer-text-container">
            <h4 className="footer-title">Услуги</h4>
            <ul className="services-list">
              {width <= 360 ? servicesMob.map(serviceslist) : servicesDesc.map(serviceslist)}
            </ul>
          </div>

          <div className="footer-vl"></div>
        </div>
        <div className="contacts">
          <h4 className="footer-title">Контактная информация</h4>
          {width <= 360 
          ?<div className="adress">
            Заводская улица, 2В, <br/> Буча, <br/> Киевская область, 08292
          </div>
          :<div className="adress">
            Заводская улица, 2В, Буча, Киевская область, 08292
          </div>
          }
          
          <div className="schedule">
            <div className="days">ПН - ПТ:</div>
            <div className="time">09:00 - 18:00</div>
          </div>
          <div className="phone">+38(097)123-45-67</div>
          <div className="media">
            {socMedia.map((mediaLink, key) => (
              <a
                className={mediaLink}
                href="#"
                key={key}
                style={{ backgroundImage: `url(${media})` }}
              ></a>
            ))}
          </div>
        </div>
      </div>
      <div className="copyright">
        {width <= 360 ?
        <p className="copyright-text">
          by <br/>
           <b>Stubbs</b>
        </p> 
        :
        <p className="copyright-text">
          Developed by <b>Stubbs</b>
        </p>
      }
      </div>
    </div>
  );
};

export default Footer;
