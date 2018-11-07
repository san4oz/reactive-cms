import React from "react";
import { connect } from "react-redux";
import  EditSitePage  from '../../components/SitePages/EditSitePage';
import { updateSitePage, fetchSitePage } from "../../actions/site-pages";

class EditSitePageContainer extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        const {match} = this.props;
        this.props.onLoad(match.params.id);        
    }

    render(){
        return (
            <EditSitePage {...this.props} />
        );
    }
}

const mapStateToProps = state => {
    return ({
        item: state.SitePages.editing
    });
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onSubmit: post => dispatch(updateSitePage(post, ownProps)),
        onLoad: id => dispatch(fetchSitePage(id))
    };
}

export default connect
(
    mapStateToProps,
    mapDispatchToProps
)(EditSitePageContainer);