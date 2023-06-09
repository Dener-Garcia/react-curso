import { Fragment } from "react";
import "./style.css"

// renderizacao condicional no CSS dentro do class name podemos usar if ou ate tenario

const GrayImage = (props) => {
    return (
        <Fragment>
            <img className={props.smallSize ? "filter-gray" : "big-image"} src={props.url} alt={props.altText}></img>
        </Fragment>
    )
}

export default GrayImage