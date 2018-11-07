import React from "react";
import Form from "../Shared/Form";
import InternalPageContainer from "../../containers/InternalPageContainer";

const EditSitePage = (props) => {
    const properties = [
        {
            name: 'Title',
            type: 'text'
        },
        {
            name: 'Url',
            type: 'text'
        },
        {
            name: 'Content',
            type: 'content'
        }
    ];

    return (
        <Form title='Edit page' {...props} properties={properties} />
    )
};

export default (props) => <InternalPageContainer component={<EditSitePage  {...props}/>} />