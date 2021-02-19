import React from "react";
import { connect } from 'react-redux'
import search from "../../img/search.svg";
import { toggleSearch } from '../../store/actions'

import "./style.css";

const Search = ({
  toggleSearch,
  activeSearch,
  touchedSearch,
}) => {
  return (
    <div className="search-wrapper">
      <div className="search-container">
        <img className={`search-img ${touchedSearch ? 'touched' : ''} ${activeSearch ? 'up-s' : 'down-s'}`} src={search} alt="search" onClick={() => toggleSearch()}/>
      </div>
      <input className={`search-input ${touchedSearch ? 'touched' : ''} ${activeSearch ? 'dropdown-s' : 'hide-s'}`} type="text" placeholder="Поиск" />
    </div>
  );
};

const mapStateToProps = ({
  activeSearch,
  touchedSearch,
}) => ({
  activeSearch,
  touchedSearch,
});

const mapDispatchToProps = (dispatch) => ({
  toggleSearch: () => {
    dispatch(toggleSearch())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Search);
