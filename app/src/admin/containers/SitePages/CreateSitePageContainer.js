import React from "react";
import { connect } from "react-redux";
import  CreateSitePage  from '../../components/SitePages/CreateSitePage';
import { createSitePage } from "../../actions/site-pages";

class CreateSitePageContainer extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <CreateSitePage {...this.props} />
        );
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onSubmit: sitePage => dispatch(createSitePage(sitePage, ownProps))
    };
}

export default connect
(
    null,
    mapDispatchToProps
)(CreateSitePageContainer);