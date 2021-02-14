import React from "react";
import search from "../../img/search.svg";
import "./style.css";

const Search = () => {
  return (
    <div className="search-wrapper">
      <div className="search-container">
        <img className="search" src={search} alt="search" />
      </div>
    </div>
  );
};

export default Search;
