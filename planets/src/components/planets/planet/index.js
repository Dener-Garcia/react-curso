import React from "react"
import DescriptionWIthLink from "../../shared/descriptionWithLink"
import GrayImage from "../../shared/gray-image.js"


const Planet = (props) => {
    return (
        <div>
            <h2>{props.tittle}</h2>
           <DescriptionWIthLink description={props.planet_description} 
           link_ref={props.link} 
           link_description={props.descritpion_link}/>
            <GrayImage url={props.planet_url}/>
        </div>
    )
}

export default Planet