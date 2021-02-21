import React from "react";
import Menu from "../../components/Menu";
import LangSelector from "../../components/LangSelector";
import Search from "../../components/Search";
import Logo from "../../components/Logo";
import "./style.css";

const Header = () => {
  const width = window.innerWidth
  return (
    <div className="header">
      {console.log(width)}
      <Logo />
      {width <= 360 ? 
      <div className="mob-search-menu">
        <Search /> <Menu />
      </div> 
      : 
      <div>
        <Menu />
        <Search />
      </div>}
      <LangSelector />
    </div>
  );
};

export default Header;
