import React from "react";
import "../styles/faireundon/faireundon.scss";

export default function FaireUnDon() {
  return (
    <div className="faire-un-don-container">
      <div className="why-donate don-divider">
        <h2 className="don-title">Pourquoi faire un don ?</h2>
        <h3>Votre générosité nous aide :</h3>
        <ul>
          <li>
            À développer l’inclusion numérique de la femme sur le continent
            africain à travers les subventions que nous accordons pour des
            projets dédiés à l’entreprenariat
          </li>
          <li>
            À la formation aux métiers du numérique. Il ne faut pas
            nécessairement être une « geek » pour travailler dans le numérique.
            L’envie d’apprendre, la capacité à s’adapter et l’esprit d’analyse
            sont autant de qualités indispensables. Le numérique est un secteur
            d’avenir et les femmes ont un vrai un rôle à y jouer
          </li>
          <li>
            À contribuer à l'autonomisation des femmes, condition essentielle au
            développement durable
          </li>
          <li>
            À la transformation de l’économie informelle (poumon de l’économie
            africaine, mais aussi source de précarité) en tenant compte de
            l’écosystème
          </li>
        </ul>
      </div>
      <div className="how-to-donate don-divider">
        <div>
          <h2 className="don-title">Comment faire un don ?</h2>
          <ul>
            <li>
              Pour faire parvenir votre don Cliquez sur ce lien pour obtenir les
              coordonnées bancaires de l’association.
            </li>
            <li>
              Vous pouvez aussi payer en ligne par carte bancaire ou par paypal
            </li>
            <li>
              Tout versement de don fera l'objet d'un reçu fiscal qui vous sera
              envoyé vers la fin de l'année de votre don.
            </li>
          </ul>
        </div>
        <div className="payment-options-container">
          <button className="donate-option-button">Paypal</button>
          <img
            className="payment-logos"
            src="https://img.generation-nt.com/paypal-logo_0670045701665860.png"
            alt="PayPal Button"
          />
        </div>
        <div className="payment-options-container">
          <button className="donate-option-button">Email</button>
          <img
            className="payment-logos"
            src="https://www.qikdigital.com/storage/2020/02/EmailTesting_Icon.png"
            alt="email"
          />
        </div>
        <div className="payment-options-container">
          <button className="donate-option-button">Credit Card</button>
          <img
            className="payment-logos"
            src="https://www.abcommerces.com/modules/systempay/views/img/BannerLogo1.png"
            alt="Credit card logos"
          />
        </div>
      </div>
    </div>
  );
}
