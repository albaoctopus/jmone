import React from "react";
import BlcSec from "../../components/Blc-sec";
import CallToAction from "../../components/Call-to-action";
import Clients1 from "../../components/Clients1";

import IntroWithSlider2 from "../../components/Intro-with-slider2";
import Navbar from "../../components/Navbar";

import Services4 from "../../components/Services4";

import DarkTheme from "../../layouts/Dark";
import Showcase3Dark from "../showcase3/showcase3-dark";
import ContactSection from "../../components/Contact-section";

const Jmo = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    var navbar = navbarRef.current;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
  }, [navbarRef]);

  return (
    <DarkTheme>
      <Navbar nr={navbarRef} lr={logoRef} />
      <IntroWithSlider2 />
      <BlcSec />
      <Services4 withBG withPadding />
      <Showcase3Dark/>
     
     
      
      <CallToAction />
      <ContactSection/>
    </DarkTheme>
  );
};

export default Jmo;
