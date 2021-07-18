import React from "react";

import logo from "./Logo.jpg";

import { CgArrowDown } from "react-icons/cg";

import { CgArrowUp } from "react-icons/cg";

import { CgMenu } from "react-icons/cg";

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  const [currentCar, setCurrentCar] = React.useState("ISUZU");

  const [mobileMenu, setMobileMenu] = React.useState(false);

  const [cars, setCars] = React.useState(["ISUZU", "Hundai", "BMW"]);

  return (
    <>
      <header>
        <div className="logo">
          <img src={logo} alt="CompanyLogo" />
        </div>

        <CgMenu
          className="menuicon"
          size="2rem"
          onClick={() => {
            setMobileMenu((p) => !p);
          }}
        />

        <nav>
          <a href="#"> ۰۹۲۰۱۳۱۹۱۳۰ </a>
          <a href="#"> خروج از نقشه خودرو </a>

          <div className="dropdown">
            <a href="#" onClick={() => setDropdownOpen((p) => !p)}>
              {dropdownOpen === true ? (
                <CgArrowUp style={{ color: "red" }} />
              ) : (
                <CgArrowDown style={{ color: "red" }} />
              )}
              انتخاب خودرو
              <span className="innerSpan"> {currentCar} </span>
            </a>

            <ul
              className="hidden"
              style={{
                display: dropdownOpen ? "block" : "none",
              }}
            >
              {cars.map((el) => {
                return (
                  <li
                    onClick={() => {
                      setCurrentCar(el);
                      setDropdownOpen(false);
                    }}
                    key={el}
                  >
                    {el}
                  </li>
                );
              })}
            </ul>
          </div>
          <a href="#">
            تماس با ما
            <span className="innerSpan"> 3516 </span>
          </a>
          <a href="#"> خانه</a>
        </nav>
      </header>

      {/* Mobile Menu */}
      <div
        className="mobile-menu"
        style={{
          display: mobileMenu ? "flex" : "none",
        }}
      >
        <ul>
          <li>09121319130</li>

          <li>خروج از نقشه خودرو</li>

          <li>تماس با ما</li>

          <li>خانه</li>
        </ul>
      </div>
    </>
  );
}
