import React from "react";
import Header from "./Header";
import Action from "./Action";


const InternalPage = (component, actions) => {
    return (
        <React.Fragment>
            <Header>
                {actions}
            </Header>
            <section>
                {component}
            </section>
        </React.Fragment>
    )
};

export default InternalPage;