import { useState, useEffect } from "react";
import logo from "../assets/img/Microscope.svg";
import Button from "./partComponents/Button";
import mobileMenu from "../assets/img/mobileMenu.svg";

function Nav() {
  const [windowDimension, setWindowDimension] = useState(null);

  useEffect(() => {
    setWindowDimension(window.innerWidth);
  }, []);

  useEffect(() => {
    function handleResize() {
      setWindowDimension(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowDimension <= 1020;

  const headerNavItems = ["Home", "Services", "Team", "About Us"];
  return isMobile ? (
    <header className="container header">
      <div className="header-logo">
        <a href="#">
          <img
            src={mobileMenu}
            width={26}
            alt="mobilemenulogo
            "
          />
        </a>

        <span className="header-logo-title">ProMed </span>
      </div>
      <Button text="Contact Us"></Button>
    </header>
  ) : (
    <header className="container header">
      <div className="header-logo">
        <img src={logo} width={36} alt="logo" />
        <span className="header-logo-title">
          ProMed{" "}
          <span className="header-logo-title header-logo-title--accent">
            Lab
          </span>
        </span>
      </div>

      <ul className="header-nav">
        {headerNavItems.map((headerNavItem) => (
          <li key={headerNavItems}>{headerNavItem}</li>
        ))}
      </ul>
      <Button text="Contact Us"></Button>
    </header>
  );
}

export default Nav;
