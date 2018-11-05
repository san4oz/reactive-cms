import React from "react";
import {Create, Update} from "../Shared/InternalPages/CRUD";
import Form from "../Shared/Form";

const EditPage = ({item}) => {
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
        <Form title='Edit page' item={item} properties={properties} />
    )
};

export default (props) => Update(<EditPage {...props} />, 'pages');