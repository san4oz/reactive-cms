import React from "react";
import { connect } from "react-redux";
import  EditPage  from '../../components/Pages/EditPage';
import { fetchPost } from "../../actions/posts";

class EditPageContainer extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        const {match, dispatch} = this.props;
        dispatch(fetchPost(match.params.id));        
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

export default connect
(
    mapStateToProps
)(EditPageContainer);