import { Fragment } from "react";
import "./style.css"

const GrayImage = (props) => {
    return (
        <Fragment>
            <img className="filter-gray" src={props.url} alt={props.altText}></img>
        </Fragment>
    )
}

export default GrayImage