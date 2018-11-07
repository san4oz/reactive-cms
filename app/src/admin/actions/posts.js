import { REQUEST_DATA, RECEIVE_DATA, RECEIVE_POSTS, RECEIVE_POST_BY_ID, EDIT_POST, CHANGE_POST } from "./action-types";
import API from "../api/API";

const requestData = () => ({
    type: REQUEST_DATA
});

const receiveData = () => ({
    type: RECEIVE_DATA
});

const receivePosts = (posts) => ({
    type: RECEIVE_POSTS,
    payload: {
        posts
    }
});

const receivePostById = (post) => ({
    type: RECEIVE_POST_BY_ID,
    payload: {
        post
    }
});

const editPost = () => ({
    type: EDIT_POST
});

export const fetchPosts = () => (dispatch) => {
    dispatch(requestData());
    API.getPosts(posts => {
        dispatch(receivePosts(posts));
        dispatch(receiveData());
    });   
};

export const fetchPost = (id) => (dispatch) => {
    dispatch(requestData());
    API.getPost(id, post => {
        dispatch(receivePostById(post));
        dispatch(receiveData());
    });
}

export const fecthEditPost = (post, ownProps) => (dispatch) => {
    dispatch(requestData());
    API.editPost(post, () => {
        dispatch(editPost());
        dispatch(receiveData());
        ownProps.history.push('/admin/pages');
    })
}