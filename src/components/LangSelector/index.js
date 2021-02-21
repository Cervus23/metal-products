import React from "react";
import {connect} from 'react-redux'
import ruFlag from "../../img/flags/Flag_of_Russia.svg";
import uaFlag from '../../img/flags/Flag_of_Ukraine.svg'
import ukFlag from '../../img/flags/Flag_of_the_United_Kingdom.svg'
import arrow from "../../img/Arrow.svg";
import {toggleLangSelector} from '../../store/actions'
import "./style.css";

// const flags = [ruFlag, uaFlag, ukFlag]

const LangSelector = ({
  toggleLangSelector,
  activeLangSelector,
  touchedLang,
}) => {
  return (
    <div className="language-wrapper">
      <div className="language-container">
        <div className="selection">
          <div className="selected-lang">
            <img className="flag " src={ruFlag} alt="ruFlag" />
          </div>
          <div className={`langbox ${touchedLang ? 'touched' : ''} ${activeLangSelector ? 'dropdown-l' : 'hide-l'}`}>
            <img className='flag inbox' src={uaFlag} alt="uaFlag" />
            <img className="flag inbox" src={ukFlag} alt="ukFlag" />
          </div>
        </div>
        <img className={`arrow ${touchedLang ? 'touched' : ''} ${activeLangSelector ? 'up-l' : 'down-l'}`} src={arrow} alt="arrow" onClick={() => toggleLangSelector()}/>
        
      </div>
    </div>
  );
};

const mapStateToProps = ({
  activeLangSelector,
  touchedLang,
}) => ({
  activeLangSelector,
  touchedLang,
});

const mapDispatchToProps = (dispatch) => ({
  toggleLangSelector: () => {
    dispatch(toggleLangSelector())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(LangSelector);
