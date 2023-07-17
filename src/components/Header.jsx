import React, { useState } from "react";
import Menu from "./pages/Menu";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // 햄버거메뉴

  const toggleMenu = () => {
    setIsOpen((prevStatus) => (prevStatus ? false : true));
    document.querySelector(".hamburger").classList.toggle("on");
    document.body.classList.toggle("no_scroll");
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

        <Link to="/">
          <p className="port">PORTFOLIO</p>
        </Link>
      </header>
    </>
  );
};

export default Header;
