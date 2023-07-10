import React, { useState } from "react";
import Hamburger from "./Hamburger";
import Menu from "./pages/Menu";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // 햄버거메뉴

  const toggleMenu = () => {
    setIsOpen((prevStatus) => (prevStatus ? false : true));
    document.querySelector(".hamburger").classList.toggle("on");
  };

  return (
    <>
      {isOpen ? <Menu /> : null}
      <header>
        <div className="nav_wrap">
          <div className="nav">
            <div className="hamburger" onClick={toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>

        <p className="port">PORTFOLIO</p>
      </header>
    </>
  );
};

export default Header;
