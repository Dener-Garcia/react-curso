import React, { fragment, useState } from "react";
import Planet from "./planet";
import Formulario from "../forms/form";
import Contador from "../contador";

const tip = () => {
    alert("assim eh um evento em React")
    console.log(getCores.resposta)
}

// chamando uma api dentro da pasta public

async function getCores() {
    let resposta = await fetch("http://localhost:3000/api/cores.json")
    let dados = await resposta.json()
        .then(dados => console.log(dados))
};

const PlanetList = () => {
    return (
        <fragment>
            <button onClick={tip}>Botao de evento</button>
            <button onClick={getCores}>Botao para chamar async function</button>
            <h2>Nossos Planetas</h2>
            <Planet
                tittle="Mercúrio"
                tituloItalico={true}
                description="Mercúrio é o menor e mais interno planeta do Sistema Solar, orbitando o Sol a cada 87,969 dias terrestres. A sua órbita tem a maior excentricidade e o seu eixo apresenta a menor inclinação em relação ao plano da órbita dentre todos os planetas do Sistema Solar."
                link="https://pt.wikipedia.org/wiki/Merc%C3%BArio_(planeta)"
                descritpion_link="Referência Wikipedia"
                planet_url="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/600px-Mercury_in_color_-_Prockter07-edit1.jpg" />
            <h3>Veja abaixo uma renderização condicional, onde retiramos a props.link do componente planeta mostrando um texto no lugar</h3>
            <Planet tittle="Venus"
                description="Vénus (português europeu) ou Vênus (português brasileiro) (AO 1990: Vénus ou Vênus) é o segundo planeta do Sistema Solar em ordem de distância a partir do Sol, orbitando-o a cada 224,7 dias. Recebeu seu nome em homenagem à deusa romana do amor e da beleza Vénus, equivalente a Afrodite."
                //link="https://pt.wikipedia.org/wiki/V%C3%A9nus_(planeta)"
                descritpion_link="Referência Wikipedia"
                planet_url="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/PIA23791-Venus-RealAndEnhancedContrastViews-20200608_%28cropped2%29.jpg/280px-PIA23791-Venus-RealAndEnhancedContrastViews-20200608_%28cropped2%29.jpg" />
            <h3>Hooks</h3>
            <h4>Exemplo com useState</h4>
            <Formulario />
            <h3>Hooks</h3>
            <h4>Exemplo com useEffect</h4>
            <Contador/>

        </fragment>
    )
}

export default PlanetList