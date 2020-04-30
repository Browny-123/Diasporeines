import React from "react";
import "../styles/home/home.scss";
export default function Accueil() {
  return (
    <div className="home-main-container">
      <header className="home-main-header">
        <h1>
          Promouvoir le numérique et l’entrepreneuriat au Féminin en Afrique
        </h1>
      </header>
      <section className="home-second-section">
        <div className="second-section-info">
          <h2>Notre Mission</h2>
          <p>Nos Objectifs</p>
        </div>
        <div className="second-section-info">
          <h2>Événements</h2>
          <p>Rejoignez-nous et ayez un impact</p>
        </div>
        <div className="second-section-info">
          <h2>S'engager</h2>
          <p>Devenez bénévole, ou faites un don</p>
        </div>
      </section>
      <section className="home-third-section">
        <h3>
          {" "}
          Une femme libre est exactement le contraire d'une femme légère{" "}
        </h3>
        <p>Simone de Beauvoir </p>
      </section>
      <section className="home-fourth-section">
        <div className="fourth-section-text">
          <h3>Rejoindre</h3>
          <h4>Diasporeines</h4>
          <button className="home-donation">Faire un don</button>
        </div>
        <div className="fourth-section-image">
          <img
            src="https://res.cloudinary.com/dsj26eqz4/image/upload/v1580912217/download_1_i4yt5y.png"
            alt="business meeting"
          />
        </div>
      </section>
    </div>
  );
}
