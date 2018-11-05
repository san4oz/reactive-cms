import React from "react";
import { connect } from "react-redux";
import  PageList  from '../../components/Pages/PageList/PageList';
import { fetchPosts } from "../../actions/posts";

class PageListContainer extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        const { dispatch } = this.props;
        dispatch(fetchPosts());
    }

    render(){
        return (
            <PageList {...this.props} />
        );
    }
}

const mapStateToProps = state => {
    return {
        pages: state.Posts.list
    };
};

export default connect(
    mapStateToProps
)(PageListContainer);