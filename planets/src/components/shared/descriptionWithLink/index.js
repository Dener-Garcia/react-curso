import { Fragment } from "react";

const DescriptionWithLink = (props) => {
    return (
        <Fragment>
            <p>{props.description}</p>
            <a href={props.link}>{props.descritpion_link}</a>
        </Fragment>
    )
}

export default DescriptionWithLink