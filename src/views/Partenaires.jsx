import React from "react";
import Dagatech from "../images/Dagatech.png";
import FederationCameroon from "../images/Federation-Cameroon.png";
import GloablIt from "../images/GlobalIT.png";
import SciTechServices from "../images/SciTechServices.png";
import SprintPay from "../images/sprint-pay.png";
import UATI from "../images/UATI.png";
import UISF from "../images/UISF.png";
import Volatic from "../images/Volatic.png";
import "../styles/partenaires/partenaires.scss";

const Partenaires = () => (
  <div className="partenaires-container">
    <a
      href="http://www.sci-tech-services.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={SciTechServices} alt="Sci-Tech Servies Cameroon" />
    </a>
    <a href="https://uati.uisf.fr/" target="_blank" rel="noopener noreferrer">
      <img src={UATI} alt="UATI" />
    </a>
    <a href="https://sprint-pay.com/" target="_blank" rel="noopener noreferrer">
      <img src={SprintPay} alt="Sprint Pay" />
    </a>
    <a
      href="https://www.fmjd.org/?p=all&f=2"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={FederationCameroon} alt="Federation Cameroon" />
    </a>
    <a href="#" target="_blank" rel="noopener noreferrer">
      <img src={UISF} alt="UISF" />
    </a>
    <a
      href="https://www.linkedin.com/company/global-it-engineering/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={GloablIt} alt="Global IT Engineering Linkedin Profile" />
    </a>
    <a
      href="http://www.dargatech.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={Dagatech} alt="Darga Tech" />
    </a>
    <a
      href="https://www.voltatic.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={Volatic} alt="Voltatic" />
    </a>
  </div>
);

export default Partenaires;
