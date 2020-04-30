import React from "react";
import { Link } from "react-router-dom";
import facebook from "../images/facebook.png";
import twitter from "../images/Twitter.png";
import linkedin from "../images/linkedin.png";
import "../styles/footer/footer.scss";

const Footer = () => (
  <div className="footer-container">
    <div className="social-media-links">
      <h4 className="footer-title">Suivez Nous</h4>
      <a
        href="https://www.facebook.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={facebook} alt="facebook" className="social-media-logo" />
      </a>
      <a
        href="https://www.linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={linkedin} alt="Linkedin" className="social-media-logo" />
      </a>
      <a
        href="https://www.twitter.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={twitter} alt="twitter" className="social-media-logo" />
      </a>
    </div>
    <div className="footer-contact-container">
      <div className="footer-contact">
        <h3>Contact</h3>
        <p>Pour tout renseignement envoyer un mail à</p>
        <p>contact@diasporeines-africa.org</p>
      </div>
      <div className="footer-nav">
        <Link className="footer-nav-link" to="/">
          Accueil
        </Link>
        <Link className="footer-nav-link" to="/actualités">
          Actualites
        </Link>
        <Link className="footer-nav-link" to="/diasporeines">
          Diasporeines
        </Link>
        <Link
          className="footer-nav-link"
          activeClassName="nav-active"
          to="/projets"
        >
          Projets
        </Link>
        <Link className="footer-nav-link" to="/nousrejoindre">
          Nous Rejoindre
        </Link>
        <Link className="footer-nav-link" to="/partenaires">
          Partenaires
        </Link>
      </div>
      <div className="footer-legal">
        <ul>
          <li>Données Personnelles</li>
          <li>Gestions des cookies</li>
          <li>Mentions légales</li>
        </ul>
      </div>
    </div>
  </div>
);

export default Footer;
