import React from "react";
import { Link } from "react-router-dom";

const Action = ({url, icon}) => (
    <div>
         <Link to={url}>
            <i className={"far fa-" + icon}></i>
        </Link>
    </div>
);

export default Action;