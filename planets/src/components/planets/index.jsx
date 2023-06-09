import React, {fragment} from "react";
import Planet from "./planet";


const PlanetList = () => {
    return (
        <fragment>
            <h2>Nossos Planetas</h2>
            
            <Planet tittle="titulo planeta" 
            descriptions="jkfa;jsdkjf;a"
            link_ref="teste"
            
            planet_url="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/600px-Mercury_in_color_-_Prockter07-edit1.jpg"/>

        </fragment>
    ) 
}

export default PlanetList