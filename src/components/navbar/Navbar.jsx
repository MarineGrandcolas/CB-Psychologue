import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import NavLogo from "../../assets/logonavbar.png";
import "./Navbar.css";

const Navbar = () => {
  const [navbarDisplay, setNavbarDisplay] = useState(false);
  const [menuDisplay, setMenuDisplay] = useState(false);

  return (
    <div className="Navbar">
      <NavLink to="/">
        <img
          className="navbar-logo animate__animated animate__pulse animate__infinite"
          src={NavLogo}
          alt="logo dandelion"
        />
        <h1 className="website-title">Catherine Brisbois</h1>
        <h1 className="website-title">Pyschologue TCC</h1>
      </NavLink>

      <div
        className={menuDisplay ? "open" : "close"}
        onClick={() => {
          setNavbarDisplay(!navbarDisplay);
          setMenuDisplay(!menuDisplay);
        }}
      >
        <div id="nav-icon">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className={navbarDisplay ? "container-on" : "container-off"}>
          <div className="navbar-pages">
            <NavLink
              to="/tcc"
              className={(navData) =>
                navData.isActive
                  ? "navigation-link selected"
                  : "navigation-link"
              }
            >
              <h3>TCC</h3>
            </NavLink>
            <NavLink
              to="/consult"
              className={(navData) =>
                navData.isActive
                  ? "navigation-link selected"
                  : "navigation-link"
              }
            >
              <h3>Consultations</h3>
            </NavLink>
            <NavLink
              to="/contact"
              className={(navData) =>
                navData.isActive
                  ? "navigation-link selected"
                  : "navigation-link"
              }
            >
              <h3>Contact et RDV</h3>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
