import React from "react";
import { BrowserRouter, Route, Switch, Routes } from "react-router-dom";

// importando as paginas
import PlanetUI from "./pages/planets";

// criando as rotas
const Rotas = () => {
    <BrowserRouter>

        <Routes>
        <Route exact path="/" component={PlanetUI} />
        </Routes>

    </BrowserRouter>
};

export default Rotas;
