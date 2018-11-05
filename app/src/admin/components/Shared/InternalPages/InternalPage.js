import React from "react";
import Header from "./Header";
import Action from "./Action";
import Loader from "../Loader";


const InternalPage = ({component, actions, isLoading}) => {
    const content = !isLoading ?
        <section>{component}</section> :
        <Loader />
    return (
        <React.Fragment>
            <Header>
                {actions}
            </Header>
            {content}
        </React.Fragment>
    )
};

export default InternalPage;