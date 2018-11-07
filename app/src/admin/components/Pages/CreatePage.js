import React from "react";
import InternalPageContainer from "../../containers/InternalPageContainer";
import Form from "../Shared/Form";

const CreatePage = () => {
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
        <Form title='Create new page' item={{}} properties={properties} />
    )
};

export default (props) => <InternalPageContainer component={<CreatePage  {...props}/>} />