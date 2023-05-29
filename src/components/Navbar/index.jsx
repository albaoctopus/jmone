import React from "react";
import Link from "next/link";
import appData from "../../data/app.json";
import {
  handleDropdown,
  handleMobileDropdown,
} from "../../common/navbar";

const Navbar = ({ nr, theme }) => {
  return (
    <nav
      ref={nr}
      className={`navbar navbar-expand-lg change ${
        theme === "themeL" ? "light" : ""
      }`}
    >
      <div className="container">
        <Link href="/">
          <a className="logo">
            {theme ? (
              theme === "themeL" ? (
                <span style={{fontFamily: 'Arial', fontSize: '30px', fontWeight: 'bolder'}}>{appData.darkLogoText}</span>
              ) : (
                <span style={{fontFamily: 'Arial', fontSize: '30px', fontWeight: 'bolder'}}>{appData.lightLogoText}</span>
              )
            ) : (
              <span style={{fontFamily: 'Arial', fontSize: '30px', fontWeight: 'bolder'}}>{appData.lightLogoText}</span>
            )}
          </a>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={handleMobileDropdown}
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="icon-bar">
            <i className="fas fa-bars"></i>
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


