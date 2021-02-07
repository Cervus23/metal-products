import React from "react";
import Menu from "../../components/Menu";
import LangSelector from "../../components/LangSelector";
import Search from "../../components/Search";
import Logo from "../../components/Logo";
import "./style.css";

const Header = () => {
  return (
    <div className="header">
      <Logo />
      <Menu />
      <Search />
      <LangSelector />
    </div>
  );
};

export default Header;
