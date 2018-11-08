import React from "react";
import InternalPageContainer from "../../containers/InternalPageContainer";
import Form from "../Shared/Form";

const CreateSitePage = ({onSubmit}) => {
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
        <Form title='Create new page' onSubmit={onSubmit} item={{}} properties={properties} />
    )
};

export default (props) => <InternalPageContainer component={<CreateSitePage  {...props}/>} />