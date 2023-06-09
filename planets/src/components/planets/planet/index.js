import React from "react"
import DescriptionWIthLink from "../../shared/descriptionWithLink"
import GrayImage from "../../shared/gray-image.js"


const Planet = (props) => {

    // Renderizacao condicional para um elemento, abaixo criamos uma variavel chamada titulo e trocamos o <h2>que antes era uma props por essa variavel, agora quando a props.tituloItalico for = true la no <h2> vamos mostrar um <h3> em italico que antes ja era uma props essa configuracao eh feita onde o componente planet eh chamado no caso fizemos um exemplo para o Mercurio
    let titulo
    if(props.tituloItalico){
        titulo = <h3><i>{props.tittle}</i></h3>
    }

    // criando um array em forma de <li>
    const satellitesNames = ["satelete 1", "satelete 2", "satelete 3", "satelete 4"]
    const satellites = satellitesNames.map((sat) =>
        <li>NOME DO {sat}</li>
    )

    return (
        <div>
            <h2>{titulo}</h2>
           <DescriptionWIthLink description={props.description} 
           link={props.link} 
           descritpion_link={props.descritpion_link}/>
            <GrayImage 
            url={props.planet_url} 
            altText="mercúrio planeta cinza com linhas e pontos brancos similar a aparência da lua"
            smallSize={true}
            />
            <p>Conheça os satelites que esse planeta tem</p>
            <ul>{satellites}</ul>
            <hr/>
        </div>
    )
}

export default Planet