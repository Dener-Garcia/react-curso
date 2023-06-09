import { Fragment } from "react";

const DescriptionWithLink = (props) => {
    if(props.link){
        return(
            <div>
            <p>{props.description}</p>
            <a href={props.link}>{props.descritpion_link}</a>
        </div>
        )
    } else
    return (
        <div>
            <p>{props.description}</p>
            <caption>Nao temos um link</caption>
        </div>
    )
}

export default DescriptionWithLink