import React from "react";
import Table from "../../Shared/Table";
import NoItemsFoundMessage from "../../Shared/NoItemsFoundMessage";
import { List } from "../../Shared/InternalPages/CRUD";


const PageList = ({pages}) => (
    <React.Fragment>
        {            
            pages ? 
            <Table title='Pages' properties={['Title', 'Url']} items={pages} /> :
            <NoItemsFoundMessage text="No items found." />
        }
    </React.Fragment>
);

export default (props) => List(<PageList {...props} />, 'pages');