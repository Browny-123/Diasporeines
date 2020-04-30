import React from "react";
import Portrait from "../images/Portrait.jpg";
import "../styles/diasporeines/diasporeines.scss";
const Diasporeines = () => (
  <div className="diasporeines-container">
    <h2 className="diasporeines-header">Equipe</h2>
    <div className="outer-profile-container">
      <div className="profile-container">
        <img src={Portrait} alt="Odette Fokapu" className="profile-picture" />
        <p className="name-title">Odette Fokapu</p>
        <p>Présidente (fondatrice)</p>
      </div>
      <div className="profile-container">
        <img src={Portrait} alt="Odette Fokapu" className="profile-picture" />
        <p className="name-title">Sandra Touga Assanda</p>
        <p>Vice-Présidente</p>
      </div>
      <div className="profile-container">
        <img src={Portrait} alt="Odette Fokapu" className="profile-picture" />
        <p className="name-title">Bermine Medza Nanin</p>
        <p>Gestionnaire</p>
      </div>
      <div className="profile-container">
        <img src={Portrait} alt="Odette Fokapu" className="profile-picture" />
        <p className="name-title">Ophélie Bouquet</p>
        <p>Secrétaire générale</p>
      </div>
      <div className="profile-container">
        <img src={Portrait} alt="Odette Fokapu" className="profile-picture" />
        <p className="name-title">Safourata Sidibé</p>
        <p>Chef de projet</p>
      </div>
    </div>
  </div>
);

export default Diasporeines;
