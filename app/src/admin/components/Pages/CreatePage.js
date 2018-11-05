import React from "react";
import {Create} from "../Shared/InternalPages/CRUD";
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

export default (props) => Create(<CreatePage {...props} />, 'pages');