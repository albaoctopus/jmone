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

       

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


