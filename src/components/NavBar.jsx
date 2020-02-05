import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/navbar.scss";

export default function NavBar() {
  return (
    <nav className="nav-main-container">
      <NavLink to="/" className="logo-nav-link">
        DIASPOREINES
      </NavLink>
      <div className="nav-links">
        <NavLink exact to="/" className="nav-link" activeClassName="nav-active">
          Accueil
        </NavLink>
        <NavLink
          to="/aPropos"
          className="nav-link"
          activeClassName="nav-active"
        >
          À propos
        </NavLink>
        <NavLink
          to="/nousSoutenir"
          className="nav-link"
          activeClassName="nav-active"
        >
          Nous soutenir
        </NavLink>
        <NavLink
          to="/actualités"
          className="nav-link"
          activeClassName="nav-active"
        >
          Actualités
        </NavLink>
        <NavLink
          to="/projets"
          className="nav-link"
          activeClassName="nav-active"
        >
          Projets
        </NavLink>
        <NavLink
          to="/adhésion"
          className="nav-link"
          activeClassName="nav-active"
        >
          Adhésion
        </NavLink>
        <NavLink
          to="/contact"
          className="nav-link"
          activeClassName="nav-active"
        >
          Contact
        </NavLink>
      </div>
      <NavLink to="/donate" className="donate-nav-link">
        Faire un don
      </NavLink>
    </nav>
  );
}
