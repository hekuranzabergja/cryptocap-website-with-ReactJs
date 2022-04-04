import React, { useState } from "react";
import "./Navbar.css";
import { NavbarData } from "./NavbarData";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";
import { BsChevronDown } from "react-icons/bs";
import Button from "../Button/Button";


const Navbar = (props) => {
  const [hideBar, showBar] = useState(false);

  function show() {
    showBar(!hideBar);
  }

  return (
    <nav className="NavbarItems">
      <h1 className="navbar-logo">
        Crypto<span className="navbar-logo-span">Cap</span>
      </h1>
      <div className="menu-icon" onClick={show}>
        {!hideBar ? <FaBars /> : <FaTimes />}
      </div>
      <ul className={hideBar ? "nav-menu active" : "nav-menu"}>
        {NavbarData.map((item, index) => {
          return (
            <li key={index}>
              <a className={item.cName} href={item.url}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>

      <div className="lalo">
        <div className="language">
          <MdLanguage />
          <div className="lan">
            <h5>En</h5>
            <BsChevronDown />
          </div>
        </div>
        <Button type="login">Login</Button>

      </div>
    </nav>
  );
};

export default Navbar;
