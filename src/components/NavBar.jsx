import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/navbar/navbar.scss";

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
          to="/Actualités"
          className="nav-link"
          activeClassName="nav-active"
        >
          Actualités
        </NavLink>
        <NavLink
          to="/diasporeines"
          className="nav-link"
          activeClassName="nav-active"
        >
          Diasporeines
        </NavLink>
        <NavLink
          to="/projets"
          className="nav-link"
          activeClassName="nav-active"
        >
          Projets
        </NavLink>
        <NavLink
          to="/nousrejoindre"
          className="nav-link"
          activeClassName="nav-active"
        >
          Nous Rejoindre
        </NavLink>
        <NavLink
          to="/partenaires"
          className="nav-link"
          activeClassName="nav-active"
        >
          Partenaires
        </NavLink>
      </div>
      <NavLink to="/faireundon" className="donate-nav-link">
        Faire un don
      </NavLink>
    </nav>
  );
}
