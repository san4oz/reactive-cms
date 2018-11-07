import React from "react";
import { connect } from "react-redux";
import  EditPage  from '../../components/Pages/EditPage';
import { fetchPost, fecthEditPost } from "../../actions/posts";

class EditPageContainer extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        const {match, dispatch} = this.props;
        this.props.onLoad(match.params.id);        
    }

    render(){
        return (
            <EditPage {...this.props} />
        );
    }
}

const mapStateToProps = state => {
    return ({
        item: state.Posts.editing
    });
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onSubmit: post => dispatch(fecthEditPost(post, ownProps)),
        onLoad: id => dispatch(fetchPost(id))
    };
}

export default connect
(
    mapStateToProps,
    mapDispatchToProps
)(EditPageContainer);