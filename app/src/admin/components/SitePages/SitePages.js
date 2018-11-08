import React from "react";
import Table from "../Shared/NavigationTable";
import NoItemsFoundMessage from "../Shared/NoItemsFoundMessage";
import InternalPageContainer from "../../containers/InternalPageContainer";
import { Link } from "react-router-dom";
import List from "../Shared/List";

const entityName= 'pages';

const SitePages = ({pages}) => {

    const items = pages.map(page => ({
        title: page.Title,
        url: `${entityName}/${page.Id}`
    }));

    return (    
        <React.Fragment>        
            {     
    
                items.length ? 
                <List items={items} /> :
                <NoItemsFoundMessage entityName={entityName} createUrl={`${entityName}/new`} />
            }
        </React.Fragment>
    );
}

export default (props) => <InternalPageContainer component={<SitePages {...props} />} />