import React from "react";
import Loader from "../Loader";


const InternalPage = ({component, isLoading}) => {
    const content = !isLoading ?
        <section>{component}</section> :
        <Loader />
    return (
        <React.Fragment>           
            {content}
        </React.Fragment>
    )
};

export default InternalPage;