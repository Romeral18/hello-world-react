import React from "react";
import "./Header.module.css";
import cl from "./Header.module.css";

const Header = () => {
  return (
    <header className={cl.header}>
      <img src="https://cdn.logo.com/hotlink-ok/logo-social.png" alt="" />
    </header>
  );
};

export default Header;
