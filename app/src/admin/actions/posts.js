import { REQUEST_POSTS, RECEIVE_POSTS } from "./action-types";
import API from "../api/API";

const requestPosts = () => ({
    type: REQUEST_POSTS
});

const receivePosts = (posts) => ({
    type: RECEIVE_POSTS,
    payload: {
        posts
    }
});

export const fetchPosts = () => (dispatch) => {
    dispatch(requestPosts());
    API.getPosts(posts => dispatch(receivePosts(posts)));
};
