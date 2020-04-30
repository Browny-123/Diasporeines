import React from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Accueil from "./views/Accueil";
import APropos from "./views/APropos";
// import NousSoutenir from "./views/NousSoutenir";
import Actualités from "./views/Actualités";
import Projets from "./views/Projets";
import Adhésion from "./views/Adhésion";
import Contact from "./views/Contact";
import FaireUnDon from "./views/FaireUnDon";
import Footer from "./components/Footer";
import Diasporeines from "./views/Diasporeines";
import Partenaires from "./views/Partenaires";

function App() {
  return (
    <div className="App">
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Accueil} />
          <Route path="/aPropos" component={APropos} />
          <Route path="/diasporeines" component={Diasporeines} />
          <Route path="/actualités" component={Actualités} />
          <Route path="/projets" component={Projets} />
          <Route path="/adhésion" component={Adhésion} />
          <Route path="/contact" component={Contact} />
          <Route path="/faireundon" component={FaireUnDon} />
          <Route path="/partenaires" component={Partenaires} />
        </Switch>
        <Footer />
      </div>
    </div>
  );
}

export default App;
