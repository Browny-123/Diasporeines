import React from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import APropos from "./components/APropos";
import NousSoutenir from "./components/NousSoutenir";
import Actualités from "./components/Actualités";
import Projets from "./components/Projets";
import Adhésion from "./components/Adhésion";
import Contact from "./components/Contact";
import Donate from "./components/Donate";
import Footer from "./components/Footer";
import "./styles/reset.css";

function App() {
  return (
    <div className="App">
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/aPropos" component={APropos} />
          <Route path="/nousSoutenir" component={NousSoutenir} />
          <Route path="/actualités" component={Actualités} />
          <Route path="/projets" component={Projets} />
          <Route path="/adhésion" component={Adhésion} />
          <Route path="/contact" component={Contact} />
          <Route path="/donate" component={Donate} />
        </Switch>
        <Footer />
      </div>
    </div>
  );
}

export default App;
