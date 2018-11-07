import React from "react";
import { connect } from "react-redux";
import  SitePages  from '../../components/SitePages/SitePages';
import { fetchSitePages } from "../../actions/site-pages";

class SitePagesContainer extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        const { dispatch } = this.props;
        dispatch(fetchSitePages());
    }

    render(){
        return (
            <SitePages {...this.props} />
        );
    }
}

const mapStateToProps = state => {
    return {
        pages: state.SitePages.list
    };
};

export default connect(
    mapStateToProps
)(SitePagesContainer);