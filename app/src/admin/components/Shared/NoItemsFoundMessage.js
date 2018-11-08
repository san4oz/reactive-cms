import React from "react";
import {Link} from "react-router-dom";

const NoItemsFoundMessage = ({entityName, createUrl}) =>  (
    <div className = "no-items-message" >
        <i className="far fa-question-circle"></i>
        <h3>{`You don't have any ${entityName}.`}</h3>
        <div>{"Would  you line to create one ?"}</div>
        <Link to={createUrl}>{`Create new ${entityName}`}</Link>
    </div >
)

export default NoItemsFoundMessage;