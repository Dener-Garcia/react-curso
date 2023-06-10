import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// importando as paginas
import PlanetUI from "./pages/planets";

// criando as rotas
const Rotas = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={PlanetUI} />     </Switch>
 
    </BrowserRouter>
  );
};

export default Rotas;
