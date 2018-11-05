import React from "react";
import Table from "../../Shared/NavigationTable";
import NoItemsFoundMessage from "../../Shared/NoItemsFoundMessage";
import { List } from "../../Shared/InternalPages/CRUD";

const entityName= 'pages';

const PageList = ({pages}) => (
    <React.Fragment>
        {            
            pages ? 
            <Table title='Pages' entityName={entityName} properties={['Title', 'Url']} items={pages} /> :
            <NoItemsFoundMessage text="No items found." />
        }
    </React.Fragment>
);

export default (props) => List(<PageList {...props} />, 'pages');